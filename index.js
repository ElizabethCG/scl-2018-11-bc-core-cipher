
function escribirMensaje() {
  let mensajeInic=document.getElementById("mensaje").value;
  let desplazamientoInic=parseInt(document.getElementById("desplazamiento").value);
  document.getElementById ("mensajeFinal").innerHTML ="<p2> El cifrado será: "    + (window.cipher.encode(mensajeInic,desplazamientoInic)) +     "</p2>";

}


// VER COMO ASIGNAR UN VALOR AL ONCLICK + LA LLAMADA DE UNA FUNCIÓN
function descifrar() {
  let mensajeInic=document.getElementById("mensaje").value;
  let desplazamientoInic=parseInt(document.getElementById("desplazamiento").value);
  document.getElementById ("mensajeFinal").innerHTML ="<p2> El cifrado será: "    + (window.cipher.decode(mensajeInic,desplazamientoInic)) +     "</p2>";

  }
