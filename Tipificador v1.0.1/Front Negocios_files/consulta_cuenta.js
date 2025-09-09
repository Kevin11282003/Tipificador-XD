"use stric";

// * getData -> Peticiones Fetch GET - Recibe como parametro una ruta Ej: "/prueba"
const getData = async (route) => {
  try {
    let res = await fetch(route);
    let json = await res.json();
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    return json;
  } catch (err) {
    console.error(err);
    Toast.fire({
      icon: "error",
      title: `Error en getData(): ${(err.status, err.statusText)}`,
    });
  }
};

// * postData -> Peticiones Fetch POST - Recibe como parametro una ruta y un JSON Ej: "/prueba", {x:1,y:2}
const postData = async (route, data = {}) => {
  try {
    let res = await fetch(route, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let json = await res.json();

    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    return json;
  } catch (err) {
    console.log(err);
  }
};

//Consulta Recurrentes - 03267390
document.addEventListener("DOMContentLoaded", () => {
  let TRAZACRMEYN = $("#Reporte_Trazabilidad_CRMEyN").DataTable({
    iDisplayLength: 5,
    aLengthMenu: [
      [3, 5, 10, 25, 50, -1],
      [3, 5, 10, 25, 50, "All"],
    ],
    columnDefs: [
      {
        targets: [],
        visible: true,
        searchable: true,
      },
    ],
    dom: "lfrtipB",
    buttons: ["copy", "excel", "csv"],

    language: {
      lengthMenu: "Mostrar _MENU_ registros",
      zeroRecords: "No se encontraro resultados",
      info: "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
      infoEmpty: "Mostrando registros de 0 al 0 de un total de 0 registros",
      infoFiltered: "(Filtrado de un total de _MAX_ registros)",
      sSearch: "Buscar",
      oPaginate: {
        sFirst: "Primero",
        sLast: "Ultimo",
        sNext: ">>",
        sPrevious: "<<",
      },
      sProcessing: "Procesando",
      paginate: {
        previous: "<i class='mdi mdi-chevron-left'>",
        next: "<i class='mdi mdi-chevron-right'>",
      },
    },
  });

  const txtnumero_busqueda = document.getElementById("txtnumero_busqueda")
  if (txtnumero_busqueda) {
    txtnumero_busqueda.addEventListener("click", async function () {
      console.log(TRAZACRMEYN);
      if (TRAZACRMEYN) {
        let resultado = await postData("/consultacrmeyn", {
          enlace: document.getElementById("txtcuenta_busqueda").value,
        });
        console.log(resultado);

        const tabla = document.querySelector("#Reporte_Trazabilidad_CRMEyN tbody");

        let tbodyhtml = ``;
        resultado.forEach((element) => {
          let arr = Object.values(element);
          tbodyhtml += `
        <tr>
            <td><center>${arr[0]}</center></td>
            <td><center>${arr[11]}${arr[12]}</center></td>
            <td><center>${arr[1]}</center></td>
            <td><center>${arr[2]}</center></td>
            <td><center>${arr[3]}</center></td>
            <td><center>${arr[4]}</center></td>
            <td><center>${arr[5]}</center></td>
            <td><center>${arr[6]}</center></td>
            <td><center>${arr[7]}</center></td>
            <td><center>${arr[8]}</center></td>
            <td><center>${arr[9]}</center></td>
            <td><center>${arr[10]}</center></td>
        </tr>`;
        });

        TRAZACRMEYN.destroy();
        tabla.innerHTML = tbodyhtml;
        TRAZACRMEYN = $("#Reporte_Trazabilidad_CRMEyN").DataTable({
          iDisplayLength: 5,
          aLengthMenu: [
            [3, 5, 10, 25, 50, -1],
            [3, 5, 10, 25, 50, "All"],
          ],
          columnDefs: [
            {
              targets: [],
              visible: true,
              searchable: true,
            },
          ],
          dom: "lfrtipB",
          buttons: ["copy", "excel", "csv"],

          language: {
            lengthMenu: "Mostrar _MENU_ registros",
            zeroRecords: "No se encontraro resultados",
            info: "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            infoEmpty: "Mostrando registros de 0 al 0 de un total de 0 registros",
            infoFiltered: "(Filtrado de un total de _MAX_ registros)",
            sSearch: "Buscar",
            oPaginate: {
              sFirst: "Primero",
              sLast: "Ultimo",
              sNext: ">>",
              sPrevious: "<<",
            },
            sProcessing: "Procesando",
            paginate: {
              previous: "<i class='mdi mdi-chevron-left'>",
              next: "<i class='mdi mdi-chevron-right'>",
            },
          },
        });
      }
    });
  }
});
