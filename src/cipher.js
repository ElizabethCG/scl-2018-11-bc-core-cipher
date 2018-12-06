  window.cipher = {
    encode: (strng,offset) => {
        let analisisMensaje=strng.trim();
        let largoCadena=analisisMensaje.length;
        var cifrado="";

                for (let i=0; i<largoCadena; i++){
                  let caracterAscii=analisisMensaje.charCodeAt(i)

                  if(64<caracterAscii&&caracterAscii<91||96<caracterAscii&&caracterAscii<123){
                    if (caracterAscii<91){cifrado=cifrado+(String.fromCharCode(((caracterAscii-65+offset)%26)+65))}
                                     else{cifrado=cifrado+(String.fromCharCode(((caracterAscii-97+offset)%26)+97))}

                  }else{

                    cifrado=cifrado+analisisMensaje[i];
                  }

                }
      return cifrado;
            },




          decode: (strng,offset) => {
              let analisisMensaje=strng.trim();
              let largoCadena=analisisMensaje.length;
              var cifrado="";

              for (let i=0; i<largoCadena; i++){
                let caracterAscii=analisisMensaje.charCodeAt(i)


            if(64<caracterAscii&&caracterAscii<91||96<caracterAscii&&caracterAscii<123){
            if (caracterAscii<91){

              var fueraDeRango =((caracterAscii-65-(offset%26)));
              if (fueraDeRango<0){
                var nuevoval=26+(fueraDeRango);
                fueraDeRango=String.fromCharCode(nuevoval+65);
                cifrado=cifrado+fueraDeRango;
              }else{cifrado=cifrado+(String.fromCharCode((caracterAscii-65-(offset%26)+65)))}
            }

              else{
                 fueraDeRango =((caracterAscii-97-(offset%26)));
                if (fueraDeRango<0){
                  nuevoval=26+(fueraDeRango);
                  fueraDeRango=String.fromCharCode(nuevoval+97);
                  cifrado=cifrado+fueraDeRango;

              }else {cifrado=cifrado+(String.fromCharCode((caracterAscii-97-(offset%26)+97)))}}




          }else{

            cifrado=cifrado+analisisMensaje[i];
          }

        }return cifrado;
}

}
