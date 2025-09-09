/* Autocompletar Formulario */
document.getElementById("consultaClientesEyN").addEventListener("click", async function () {
  let resultadoConsultaEnlace = await postData("/consulta", {
    enlace: document.getElementById("txtcuenta_enlace").value,
  });

  console.log(resultadoConsultaEnlace);
  if (resultadoConsultaEnlace.length > 0) {
    document.getElementById("txtnit_cc_id").value = resultadoConsultaEnlace[0].CLI_CNIT_CC_ID;
    document.getElementById("txtrazon_social").value = resultadoConsultaEnlace[0].CLI_CRAZON_SOCIAL;
    document.getElementById("txtciudad").value = resultadoConsultaEnlace[0].CLI_CCIUDAD;
    document.getElementById("txtbarrio_sector").value = resultadoConsultaEnlace[0].CLI_CBARRIO_SECTOR;
    document.getElementById("txtdireccion").value = resultadoConsultaEnlace[0].CLI_CDIRECCION;
    document.getElementById("txthorarios_atencion_cliente").value = resultadoConsultaEnlace[0].CLI_CHORARIOS_ATENCION_CLIENTE;
    document.getElementById("txttipo_segmento").value = resultadoConsultaEnlace[0].CLI_CTIPO_SEGMENTO;
    // document.getElementById("txttecnologia").value = //   resultadoConsultaEnlace[0].CLI_CTECNOLOGIA;
    document.getElementById("txtcmts_redacceso").value = resultadoConsultaEnlace[0].CLI_CCMTS_REDACCESO;
    document.getElementById("txtnodo_puertos").value = resultadoConsultaEnlace[0].CLI_CNODO_PUERTOS;
    document.getElementById("txtterminal_asociada").value = resultadoConsultaEnlace[0].CLI_CTERMINAL_AFECTADA;
    document.getElementById("txtservicio_asociado").value = resultadoConsultaEnlace[0].CLI_CSERVICIO_ASOCIADO;
  } else {
    document.getElementById("txtnit_cc_id").value = "";
    document.getElementById("txtrazon_social").value = "";
    document.getElementById("txtciudad").value = "";
    document.getElementById("txtbarrio_sector").value = "";
    document.getElementById("txtdireccion").value = "";
    document.getElementById("txthorarios_atencion_cliente").value = "";
    document.getElementById("txttipo_segmento").value = "";
    // document.getElementById("txttecnologia").value = "";
    document.getElementById("txtcmts_redacceso").value = "";
    document.getElementById("txtnodo_puertos").value = "";
    document.getElementById("txtterminal_asociada").value = "";
    document.getElementById("txtservicio_asociado").value = "";
  }
});

// Mostrar Acordeon Cliente
function mostrarCliente() {
  const acordeonCLiente = document.querySelectorAll('.acordeonCLiente');
  
  acordeonCLiente.forEach(element => {
    element.classList.remove('d-none');
  
  });
}

/* Cuenta Generica */
function cuentaGenerica() {
  /* document.getElementById('txtcontacto_cliente').value="Dario Rozo";
  document.getElementById('txtcargo_parentesco').value="Desarrollador";
  document.getElementById('txtnum_cont_cliente').value="3102970334";
  document.getElementById('txtcorreo_contacto').value="desarrollo.dariorozo@gmail.com";
  document.getElementById('txtfalla_solicitud').value="Sin navegación";
  document.getElementById('txtcuenta_enlace').value="03267390";
  document.getElementById('txtnit_cc_id').value="900123789-5";
  document.getElementById('txtrazon_social').value="New Stage 365 Grados";
  document.getElementById('txtciudad').value="Bogotá";
  document.getElementById('txtbarrio_sector').value="Kennedy";
  document.getElementById('txtdireccion').value="Cra 80f # 40f - 43";
  document.getElementById('txthorarios_atencion_cliente').value="Todos los días 24/7";
  document.getElementById('txttipo_segmento').value="Negocios";
  document.getElementById('txttecnologia').value="HFC";
  document.getElementById('txtcmts_redacceso').value="HAC-ANT.BELLO_HOG-CP2";
  document.getElementById('txtnodo_puertos').value="4/8/2:4";
  document.getElementById('txtterminal_asociada').value="ZTE F660";
  document.getElementById('txtservicio_asociado').value="Paquete Hosting";
  document.getElementById('txtevento').value="No aplica";
  document.getElementById('txtdescripcion_evento').value="No aplica";
  document.getElementById('txtgrupo_asigando').value="EYN - Soporte Negocios COS";
  document.getElementById('txtlider_asignado').value="ECP1256S - Pepito lider";  
  document.getElementById('txtticket_radicado').value="03267390";
  document.getElementById('txtestado_caso').value="Cerrado"; */

  /* Datos cuenta generica FO */
  /* document.getElementById('txtcuenta_enlace').value="NSG0365";
  document.getElementById('txtnit_cc_id').value="900.292.245-4";
  document.getElementById('txtrazon_social').value="COLOMBIAN OUTSOURCING SOLUTIONS";
  document.getElementById('txtciudad').value="Bogotá";
  document.getElementById('txtbarrio_sector').value="Puente Aranda";
  document.getElementById('txtdireccion').value="Cra 43 # 17-47";
  document.getElementById('txthorarios_atencion_cliente').value="Todos los días 24/7";
  document.getElementById('txttipo_segmento').value="Empresas";
  document.getElementById('txttecnologia').value="FO";
  document.getElementById('txtcmts_redacceso').value="HAC-ANT.BELLO_HOG-CP2";
  document.getElementById('txtnodo_puertos').value="4/3/2:1";
  document.getElementById('txtterminal_asociada').value="ZTE F660";
  document.getElementById('txtservicio_asociado').value="Paquete Hosting"; */

  /* Datos cuenta generica HFC */
  /* document.getElementById('txtcuenta_enlace').value="03267390";
  document.getElementById('txtnit_cc_id').value="900.292.245-4";
  document.getElementById('txtrazon_social').value="COLOMBIAN OUTSOURCING SOLUTIONS";
  document.getElementById('txtciudad').value="Bogotá";
  document.getElementById('txtbarrio_sector').value="Puente Aranda";
  document.getElementById('txtdireccion').value="Cra 43 # 17-47";
  document.getElementById('txthorarios_atencion_cliente').value="Todos los días 24/7";
  document.getElementById('txttipo_segmento').value="Empresas";
  document.getElementById('txttecnologia').value="HFC";
  document.getElementById('txtcmts_redacceso').value="CMTS-CLARO-BOG-01-COS01";
  document.getElementById('txtnodo_puertos').value="3A0013";
  document.getElementById('txtterminal_asociada').value="ALL";
  document.getElementById('txtservicio_asociado').value="Triple Play"; */
}