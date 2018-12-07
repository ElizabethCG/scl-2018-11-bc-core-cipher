  window.cipher = {
// FUNCION ENCODE
    encode: (strng,offset) => {
        let analisisMensaje=strng.trim();
        let largoCadena=analisisMensaje.length;
        var cifrado="";

        // EJECUTA EL CICLO FOR TANTAS VECES COMO CARACTERES CONTENGA LA CADENA DE TEXTO RECIBIDA
                for (let i=0; i<largoCadena; i++){
                  let caracterAscii=analisisMensaje.charCodeAt(i)
        // SI EL CARACTER CORRESPONDE A MAYUSCULAS O MINUSCULAS EJECUTA EL CIFRADO, SINO SALTA A LA LINEA DEL COMENTARIO SIGUIENTE
                  if(64<caracterAscii&&caracterAscii<91||96<caracterAscii&&caracterAscii<123){
                    if (caracterAscii<91){cifrado=cifrado+(String.fromCharCode(((caracterAscii-65+offset)%26)+65))}
                                     else{cifrado=cifrado+(String.fromCharCode(((caracterAscii-97+offset)%26)+97))}
        // EN CASO DE QUE EL CARACTER ANALIZADO NO SEA MAYUSCULAS O MINUSCULAS EJECUTA DESDE ESTA LINEA DE CODIGO
        // Y MANTENIENE EL CARACTER SIN CIFRAR Y LO ANEXA A LA CADENA DE TEXTO DE RESULTADO
                  }else{
                    cifrado=cifrado+analisisMensaje[i];
                  }
                }
      //RESULTADO FINAL DEL CIFRADO PARA RETORNO
      return cifrado;
            },



// FUNCION DECODE
          decode: (strng,offset) => {
              let analisisMensaje=strng.trim();
              let largoCadena=analisisMensaje.length;
              var cifrado="";
     // EJECUTA EL CICLO FOR TANTAS VECES COMO CARACTERES CONTENGA LA CADENA DE TEXTO RECIBIDA
              for (let i=0; i<largoCadena; i++){
                let caracterAscii=analisisMensaje.charCodeAt(i)

  // SI EL CARACTER CORRESPONDE A MAYUSCULAS O MINUSCULAS EJECUTA EL DESCIFRADO, SINO SALTA A LA LINEA DEL COMENTARIO SIGUIENTE
            if(64<caracterAscii&&caracterAscii<91||96<caracterAscii&&caracterAscii<123){
            if (caracterAscii<91){

              var fueraDeRango =((caracterAscii-65-(offset%26)));
              if (fueraDeRango<0){
                var nuevoValor=26+(fueraDeRango);
                    cifrado=cifrado+(String.fromCharCode(nuevoValor+65));
              }else{cifrado=cifrado+(String.fromCharCode((caracterAscii-65-(offset%26)+65)))}
            }

              else{
                 fueraDeRango =((caracterAscii-97-(offset%26)));
                if (fueraDeRango<0){
                    nuevoValor=26+(fueraDeRango);
                    cifrado=cifrado+(String.fromCharCode(nuevoValor+97));

              }else {cifrado=cifrado+(String.fromCharCode((caracterAscii-97-(offset%26)+97)))}}


    // EN CASO DE QUE EL CARACTER ANALIZADO NO SEA MAYUSCULAS O MINUSCULAS EJECUTA DESDE ESTA LINEA DE CODIGO
    // Y MANTENIENE EL CARACTER SIN DESCIFRAR Y LO ANEXA A LA CADENA DE TEXTO DE RESULTADO

          }else{

            cifrado=cifrado+analisisMensaje[i];
          }
    //RESULTADO FINAL DEL DESCIFRADO PARA RETORNO
        }return cifrado;
}

}
