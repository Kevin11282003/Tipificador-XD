"use stric";

document.addEventListener("DOMContentLoaded", () => {

  let TABLAUSU = $("#Reporte_Casos_Usuario").DataTable({
    order: [[0, "desc"]],
    iDisplayLength: 3,
    aLengthMenu: [
      [3, 5, 10, 25, 50, -1],
      [3, 5, 10, 25, 50, "All"],
    ],
    columnDefs: [
      {
        // targets: [],
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
    }
  }); 

  $(document).on('click', '#omodal_dashboard', async () => {
    if (TABLAUSU) {      

      let resultado = await postData("/perfildatos");
      // console.log(resultado);

      const tabla = document.querySelector("#Reporte_Casos_Usuario tbody");      

      let tbodyhtml = ``;
      resultado.forEach((element) => {
        let arr = Object.values(element);
               
        //Contadores - Indicadores
        let totalCasos = 0;
        let totalEscalados = 0;
        let totalCerrados = 0;
           
        for (const res of resultado){        
          if (res.FRN_CESTADO_CASO === "Cerrado" ||
              res.FRE_CESTADO_CASO === "Cerrado" ||
              res.FRD_CESTADO_CASO === "Cerrado" ||
              res.FRR_CESTADO_CASO === "Cerrado" ||
              res.FRG_CACTIVIDAD === "DATOS" ||
              res.FRG_CACTIVIDAD === "LLAMADA CAIDA" ||
              res.FRG_CACTIVIDAD === "PLANTA EXTERNA" ||
              res.MUG_CESTADO_CASO === "Cerrado" ||
              res.MUS_CESTADO_CASO === "Solución en primer contacto" ||
              res.MUS_CESTADO_CASO === "Sin Contacto" ||
              res.MUS_CESTADO_CASO === "Sin Datos" ||
              res.MUS_CESTADO_CASO === "En Seguimiento" ||
              res.MUS_CESTADO_CASO === "Transferencia" ||
              res.MUS_CESTADO_CASO === "Duplicados" ||
              res.MUS_CESTADO_CASO === "Cerrado" ||
              res.GEO_CESTADO === "CERRADO" ||
              res.GEO_CESTADO === "PENDIENTE CLIENTE" ||
              res.GEO_CESTADO === "FALLA PERSISTE" ||
              res.SEG_CCIERRE_ESCALADO === "NOC" ||
              res.SEG_CCIERRE_ESCALADO === "CERRADO BACKOFFICE" ||
              res.SEG_CCIERRE_ESCALADO === "GESTION INMEDIATA" ) {
            totalCerrados = totalCerrados + 1;
            console.log(totalCerrados);

          } else if 
            ( res.FRN_CESTADO_CASO === "Escalado" ||
              res.FRE_CESTADO_CASO === "Escalado" ||
              res.FRD_CESTADO_CASO === "Escalado" ||
              res.FRR_CESTADO_CASO === "Escalado" ||
              res.MUG_CESTADO_CASO === "Escalado" ||
              res.MUS_CESTADO_CASO === "Escalado" ||
              res.GEO_CESTADO === "ESCALADO" ) {
            totalEscalados = totalEscalados + 1;
            console.log(totalEscalados);
          }
        }             

        totalCasos = totalEscalados + totalCerrados;
        document.getElementById("totalCasos").innerHTML = totalCasos;
        document.getElementById("totalCasosEscalados").innerHTML = totalEscalados;
        document.getElementById("totalCasosCerrados").innerHTML = totalCerrados;

        tbodyhtml += `
          <tr>
            <td><center>${arr[0]}</center></td>
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
      //Destruyo la tabla
      TABLAUSU.destroy();

      tabla.innerHTML = tbodyhtml;
      TABLAUSU = $("#Reporte_Casos_Usuario").DataTable({
        order: [[0, "desc"]],
        iDisplayLength: 3,
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
        }
      });
    }
  });
});

