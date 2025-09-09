document.addEventListener("DOMContentLoaded", function () {
    const contenedorApp = document.querySelector('.app'); // Seleccionamos el contenedor principal

    // Crear el botón dinámicamente
    const botonModoOscuro = document.createElement('button');
    botonModoOscuro.id = 'toggle-dark-mode';
    botonModoOscuro.textContent = 'Cambiar a Modo Oscuro';

    // Insertamos el botón dentro de la aplicación
    contenedorApp.appendChild(botonModoOscuro);

    // Comprobamos si el modo oscuro ya está activado
    const modoOscuroActivo = localStorage.getItem('modoOscuro') === 'true';

    // Aplicar el modo oscuro si está guardado en el localStorage
    if (modoOscuroActivo) {
        contenedorApp.classList.add('dark-mode');
        botonModoOscuro.textContent = "Cambiar a Modo Claro"; // Cambiar el texto del botón al iniciar en modo oscuro
    }

    // Función para alternar el modo oscuro
    function toggleDarkMode() {
        contenedorApp.classList.toggle('dark-mode');

        // Guardar la preferencia en el localStorage
        const esModoOscuro = contenedorApp.classList.contains('dark-mode');
        localStorage.setItem('modoOscuro', esModoOscuro);

        // Cambiar el texto del botón dependiendo del modo
        if (esModoOscuro) {
            botonModoOscuro.textContent = "Cambiar a Modo Claro";
        } else {
            botonModoOscuro.textContent = "Cambiar a Modo Oscuro";
        }
    }

    // Asignamos el evento al botón
    botonModoOscuro.addEventListener('click', toggleDarkMode);
});
