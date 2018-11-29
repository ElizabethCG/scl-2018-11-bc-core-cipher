
function escribirMensaje() {
  let mensajeInic=document.getElementById("mensaje").value;
  let desplazamientoInic=parseInt(document.getElementById("desplazamiento").value);
  document.getElementById ("mensajeFinal").innerHTML ="<p2> Tu mensaje cifrado quedará así: "    + (window.cipher.encode(mensajeInic,desplazamientoInic)) +     "</p2>";
  document.getElementById("mensajeFinal").style.display="block";
}


// VER COMO ASIGNAR UN VALOR AL ONCLICK + LA LLAMADA DE UNA FUNCIÓN
function descifrar() {
  let mensajeInic=document.getElementById("mensaje").value;
  let desplazamientoInic=parseInt(document.getElementById("desplazamiento").value);
  document.getElementById ("mensajeFinal").innerHTML ="<p2> Tu mensaje cifrado dice lo siguiente: "    + (window.cipher.decode(mensajeInic,desplazamientoInic)) +     "</p2>";
  document.getElementById("mensajeFinal").style.display="block";
  }
