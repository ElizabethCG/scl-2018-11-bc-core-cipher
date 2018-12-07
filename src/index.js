// // window.onload=


// LLAMADA BOTON LEER MAS
document.getElementById("btnLeerMas").addEventListener("click",
  (evento)=> {
    evento.preventDefault();
    document.getElementById ( "btnInstrucciones").style.display="none";
    document.getElementById ( "btnLeerMas").style.display="none";
    document.getElementById ( "bienvenido").style.display="none";
    document.getElementById ( "mensaje").style.display="none";
    document.getElementById ( "desplazamiento").style.display="none";
    document.getElementById ( "btnCifrar").style.display="none";
    document.getElementById ("btnDescifrar").style.display="none";
    document.getElementById ("explicacionCifradoCesar").innerHTML ="<p>El cifrado césar es una de las técnicas de cifrado más usadas. La metodología consiste en reemplazar una letra por otra, según una cantidad de desplazamientos indicada. De este modo, si queremos cifrar la letra A con un desplazamiento de 2, tendremos como resultado la letra C  </p>";
    document.getElementById ("explicacionCifradoCesar").style.display="block";
    document.getElementById ("volverLeerMas").style.display="block";
    document.getElementById("mensajeFinal").style.display="none"

    document.getElementById("volverLeerMas").addEventListener("click",
      (evento)=> {
        evento.preventDefault();


        document.getElementById ( "btnInstrucciones").style.display="initial";
        document.getElementById ( "btnLeerMas").style.display="initial";
        document.getElementById ( "bienvenido").style.display="initial";
        document.getElementById ( "mensaje").style.display="initial";
        document.getElementById ( "desplazamiento").style.display="initial";
        document.getElementById ( "btnCifrar").style.display="initial";
        document.getElementById ("btnDescifrar").style.display="initial";
        document.getElementById ("explicacionCifradoCesar").style.display="none";
        document.getElementById ("volverLeerMas").style.display="none";
        document.getElementById("mensajeFinal").style.display="none"

    })

})




// LLAMADA BOTON INSTRUCCIONES


document.getElementById("btnInstrucciones").addEventListener("click",
  (evento)=> {
    evento.preventDefault();
    document.getElementById ( "btnInstrucciones").style.display="none";
    document.getElementById ( "btnLeerMas").style.display="none";
    document.getElementById ( "bienvenido").style.display="none";
    document.getElementById ( "mensaje").style.display="none";
    document.getElementById ( "desplazamiento").style.display="none";
    document.getElementById ( "btnCifrar").style.display="none";
    document.getElementById ("btnDescifrar").style.display="none";
    document.getElementById ("instruccionesUso").style.display="block";

    document.getElementById ("volverInstrucciones").style.display="block";
    document.getElementById("mensajeFinal").style.display="none"

    document.getElementById("volverInstrucciones").addEventListener("click",
      (evento)=> {
        evento.preventDefault();
        document.getElementById ( "btnInstrucciones").style.display="initial";
        document.getElementById ( "btnLeerMas").style.display="initial";
        document.getElementById ( "bienvenido").style.display="initial";
        document.getElementById ( "mensaje").style.display="initial";
        document.getElementById ( "desplazamiento").style.display="initial";
        document.getElementById ( "btnCifrar").style.display="initial";
        document.getElementById ("btnDescifrar").style.display="initial";
        document.getElementById ("instruccionesUso").style.display="none";
        document.getElementById ("volverInstrucciones").style.display="none";
        document.getElementById("mensajeFinal").style.display="none"

    })

})


// ACTIVA BOTON DESPLAZAMIENTO


document.getElementById("mensaje").addEventListener("keyup",
  (evento)=> {
    evento.preventDefault();
    document.getElementById ( "desplazamiento").disabled=false;
    document.getElementById ( "desplazamiento").style.borderColor="blue";
    document.getElementById ( "desplazamiento").style.backgroundColor="#F9E79F";
})

// RECIBE OFFSET
document.getElementById("desplazamiento").addEventListener("click",
  (evento)=> {
    evento.preventDefault();
    document.getElementById ( "btnCifrar").disabled=false;
    document.getElementById ("btnDescifrar").disabled=false
})


// LLAMADA PROCESO PRINCIPAL CON FUNCIONES ENCODE DECODE
// LLAMADA FUNCION ENCODE
document.getElementById("btnCifrar").addEventListener("click",
  (evento)=> {
    evento.preventDefault();
    let mensajeInic=document.getElementById("mensaje").value;
    let desplazamientoInic=parseInt(document.getElementById("desplazamiento").value);
    document.getElementById ("mensajeFinal").innerHTML ="<p2> Tu párrafo cifrado quedará así: "    + (cipher.encode(mensajeInic,desplazamientoInic)) +     "</p2>";
    document.getElementById("mensajeFinal").style.display="block";

})

// LLAMADA FUNCION DECODE
document.getElementById("btnDescifrar").addEventListener("click",
  (evento)=> {
    evento.preventDefault();
    let mensajeInic=document.getElementById("mensaje").value;
    let desplazamientoInic=parseInt(document.getElementById("desplazamiento").value);
    document.getElementById ("mensajeFinal").innerHTML ="<p2> Tu párrafo descifrado dice lo siguiente: "    + (cipher.decode(mensajeInic,desplazamientoInic)) +     "</p2>";
    document.getElementById("mensajeFinal").style.display="block";

})
