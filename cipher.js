window.cipher = {
  encode: (a,b) => {

    // a=mensajeInic
    // b=desplazamientoInic


      let analisisMensaje=a.toUpperCase().trim();
      let largoCadena=analisisMensaje.length;


      var cifrado="";

      for (let i=0; i<largoCadena; i++){

        let caracterAscii=analisisMensaje.charCodeAt(i)


        if(caracterAscii===32){caracterAscii=48;
          cifrado=cifrado+"0";
        }else {

          cifrado=cifrado+(String.fromCharCode(((caracterAscii-65+b)%26)+65));

          }}



  return cifrado;
  },



// FUNCION INDICADA
  decode: (a,b) => {


      let analisisMensaje=a.toUpperCase().trim();
      let largoCadena=analisisMensaje.length;



      var cifrado="";

      for (let i=0; i<largoCadena; i++){

        let caracterAscii=analisisMensaje.charCodeAt(i)


        if(caracterAscii===48){caracterAscii=32;
          cifrado=cifrado+" ";
        }else {

            var mirar =((caracterAscii-65-(b%26)));
            if (mirar<0){
              var nuevoval=26+(mirar);
              mirar=String.fromCharCode(nuevoval+65);
              cifrado=cifrado+mirar;
              }

            else{
              cifrado=cifrado+(String.fromCharCode((caracterAscii-65-(b%26)+65)));

            }
          }

          }

    return cifrado;

  }
};
