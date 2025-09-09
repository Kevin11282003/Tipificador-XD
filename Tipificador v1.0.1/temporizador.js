document.addEventListener("DOMContentLoaded", function () {
    // Variables para el temporizador
    let tiempoRestante = 105; // 1 minuto y 45 segundos
    let temporizador;
    let enPausa = false;

    // Crear el objeto de audio para el timbre
    const timbre = new Audio('timbre.mp3'); // Asegúrate de que el archivo de audio esté en la misma carpeta que tu código o proporciona la URL correcta

    // Creamos el contenedor del temporizador y lo agregamos al HTML
    const temporizadorContainer = document.getElementById('temporizador-container');
    const temporizadorHTML = `
        <span id="tiempo">01:45</span>
        <div>
            <button class="button" id="inicio">Iniciar</button>
            <button class="button" id="pausa">Pausa</button>
            <button class="button" id="reiniciar">Reiniciar</button>
        </div>
    `;
    temporizadorContainer.innerHTML = temporizadorHTML;

    const tiempoDisplay = document.getElementById('tiempo');
    const botonInicio = document.getElementById('inicio');

    // Función para actualizar el tiempo en el formato adecuado
    function actualizarTiempo() {
        let minutos = Math.floor(tiempoRestante / 60);
        let segundos = ('0' + (tiempoRestante % 60)).slice(-2);
        tiempoDisplay.textContent = `${minutos}:${segundos}`;

        if (tiempoRestante <= 0) {
            clearInterval(temporizador);
            botonInicio.disabled = false; // Habilitar botón de "Iniciar" cuando termine el temporizador
            tiempoDisplay.classList.add('arcoiris');
            document.body.classList.add('arcoiris'); // Aplica el borde arcoíris

            // Reproducir el sonido del timbre
            timbre.play(); // Reproduce el timbre cuando el tiempo llega a 0

            // Verificar si ya se ha concedido permiso para notificaciones
            if (Notification.permission === "granted") {
                // Mostrar la notificación
                new Notification("¡El temporizador ha terminado!");
            } else {
                // Solicitar permiso al usuario para mostrar notificaciones
                Notification.requestPermission().then(permission => {
                    if (permission === "granted") {
                        new Notification("¡El temporizador ha terminado!");
                    } else {
                        console.log("Permiso para notificaciones denegado.");
                    }
                });
            }
        }
    }

    // Función para iniciar el temporizador
    function startTimer() {
        if (!enPausa && tiempoRestante > 0) {
            // Deshabilitar el botón de "Iniciar" mientras el temporizador está en marcha
            botonInicio.disabled = true;

            temporizador = setInterval(() => {
                if (tiempoRestante > 0) {
                    tiempoRestante--;
                    actualizarTiempo();
                }
            }, 1000);
        } else {
            // Si está en pausa, solo reanudamos el temporizador
            enPausa = false;
            botonInicio.disabled = true; // Deshabilitar botón "Iniciar"
            temporizador = setInterval(() => {
                if (tiempoRestante > 0) {
                    tiempoRestante--;
                    actualizarTiempo();
                }
            }, 1000);
        }
    }

    // Función para pausar el temporizador
    function pauseTimer() {
        clearInterval(temporizador);
        enPausa = true;
        botonInicio.disabled = false; // Habilitar botón "Iniciar" después de pausa
    }

    // Función para reiniciar el temporizador
    function resetTimer() {
        clearInterval(temporizador);
        tiempoRestante = 105;
        actualizarTiempo();
        tiempoDisplay.classList.remove('arcoiris');
        document.body.classList.remove('arcoiris'); // Elimina el borde arcoíris
        enPausa = false;
        botonInicio.disabled = false; // Habilitar botón "Iniciar" después del reinicio
    }

    // Asignamos los eventos a los botones
    document.getElementById('inicio').addEventListener('click', startTimer);
    document.getElementById('pausa').addEventListener('click', pauseTimer);
    document.getElementById('reiniciar').addEventListener('click', resetTimer);

    // Inicializamos el tiempo
    actualizarTiempo();
});
