// // window.onload=


// LLAMADA BOTON LEER MAS
document.getElementById("btns").addEventListener("click",
  (evento)=> {
    evento.preventDefault();
    document.getElementById ( "btn").style.display="none";
    document.getElementById ( "btns").style.display="none";
    document.getElementById ( "bienvenido").style.display="none";
    document.getElementById ( "mensaje").style.display="none";
    document.getElementById ( "desplazamiento").style.display="none";
    document.getElementById ( "botn").style.display="none";
    document.getElementById ("botnn").style.display="none";
    document.getElementById ("explicacionCifradoCesar").innerHTML ="<p>El cifrado césar es una de las técnicas de cifrado más usadas. Una letra del alfabeto es reemplazada por otra, según una cantidad de desplazamientos indicada. </p>";
    document.getElementById ("explicacionCifradoCesar").style.display="block";
    document.getElementById ("volverLeerMas").style.display="block";
    document.getElementById("mensajeFinal").style.display="none"

    document.getElementById("volverLeerMas").addEventListener("click",
      (evento)=> {
        evento.preventDefault();


        document.getElementById ( "btn").style.display="initial";
        document.getElementById ( "btns").style.display="initial";
        document.getElementById ( "bienvenido").style.display="initial";
        document.getElementById ( "mensaje").style.display="initial";
        document.getElementById ( "desplazamiento").style.display="initial";
        document.getElementById ( "botn").style.display="initial";
        document.getElementById ("botnn").style.display="initial";
        document.getElementById ("explicacionCifradoCesar").style.display="none";
        document.getElementById ("volverLeerMas").style.display="none";
        document.getElementById("mensajeFinal").style.display="none"

    })

})




// LLAMADA BOTON INSTRUCCIONES


document.getElementById("btn").addEventListener("click",
  (evento)=> {
    evento.preventDefault();
    document.getElementById ( "btn").style.display="none";
    document.getElementById ( "btns").style.display="none";
    document.getElementById ( "bienvenido").style.display="none";
    document.getElementById ( "mensaje").style.display="none";
    document.getElementById ( "desplazamiento").style.display="none";
    document.getElementById ( "botn").style.display="none";
    document.getElementById ("botnn").style.display="none";
    document.getElementById ("instruccionesUso").style.display="block";

    document.getElementById ("volverInstrucciones").style.display="block";
    document.getElementById("mensajeFinal").style.display="none"

    document.getElementById("volverInstrucciones").addEventListener("click",
      (evento)=> {
        evento.preventDefault();
        document.getElementById ( "btn").style.display="initial";
        document.getElementById ( "btns").style.display="initial";
        document.getElementById ( "bienvenido").style.display="initial";
        document.getElementById ( "mensaje").style.display="initial";
        document.getElementById ( "desplazamiento").style.display="initial";
        document.getElementById ( "botn").style.display="initial";
        document.getElementById ("botnn").style.display="initial";
        document.getElementById ("instruccionesUso").style.display="none";
        document.getElementById ("volverInstrucciones").style.display="none";
        document.getElementById("mensajeFinal").style.display="none"

    })

})


// LLAMADA PROCESO PRINCIPAL CON FUNCIONES ENCODE DECODE


document.getElementById("mensaje").addEventListener("keyup",
  (evento)=> {
    evento.preventDefault();
    document.getElementById ( "desplazamiento").disabled=false;
    document.getElementById ( "desplazamiento").style.borderColor="blue";
    document.getElementById ( "desplazamiento").style.backgroundColor="#F9E79F";
})


document.getElementById("desplazamiento").addEventListener("click",
  (evento)=> {
    evento.preventDefault();
    document.getElementById ( "botn").disabled=false;
    document.getElementById ("botnn").disabled=false
})




document.getElementById("botn").addEventListener("click",
  (evento)=> {
    evento.preventDefault();
    let mensajeInic=document.getElementById("mensaje").value;
    let desplazamientoInic=parseInt(document.getElementById("desplazamiento").value);
    document.getElementById ("mensajeFinal").innerHTML ="<p2> Tu párrafo cifrado quedará así: "    + (cipher.encode(mensajeInic,desplazamientoInic)) +     "</p2>";
    document.getElementById("mensajeFinal").style.display="block";

})


document.getElementById("botnn").addEventListener("click",
  (evento)=> {
    evento.preventDefault();
    let mensajeInic=document.getElementById("mensaje").value;
    let desplazamientoInic=parseInt(document.getElementById("desplazamiento").value);
    document.getElementById ("mensajeFinal").innerHTML ="<p2> Tu párrafo descifrado dice lo siguiente: "    + (cipher.decode(mensajeInic,desplazamientoInic)) +     "</p2>";
    document.getElementById("mensajeFinal").style.display="block";

})
