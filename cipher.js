window.cipher = {

// FUNCION ENCODE
  encode: (strng,offset) => {
    let cifrado="";
    cifrado=cipher.identificaTipoDeCaracter(strng,offset,cifrado);
    return cifrado},

// FUNCION DECODE
    decode: (strng,offset) => {
    let cifrado="";
    offset=offset*-1;
    cifrado=cipher.identificaTipoDeCaracter(strng,offset,cifrado);
    return cifrado},


//FUNCION IDENTIFICA TIPO DE CARACTER A CIFRAR, SEGUN RANGOS ASCII
identificaTipoDeCaracter:(strng,offset,cifrado)=>{

      let analisisMensaje=strng.trim();
      let largoCadena=analisisMensaje.length;
      for (let i=0; i<largoCadena; i++){
      let caracterAscii=analisisMensaje.charCodeAt(i)

let tipoConvertir="";

if(64<caracterAscii&&caracterAscii<91){
  tipoConvertir="mayusculas";
}else if (96<caracterAscii&&caracterAscii<123) {
  tipoConvertir="minusculas";
}else if (47<caracterAscii&&caracterAscii<58) {
  tipoConvertir="numeros";
 }  else if (31<caracterAscii&&caracterAscii<48) {
  tipoConvertir="caracteresEspeciales";
}  else if (57<caracterAscii&&caracterAscii<65) {
 tipoConvertir="caracteresEspeciales2";
}  else if (90<caracterAscii&&caracterAscii<97) {
 tipoConvertir="caracteresEspeciales3";
}  else if (122<caracterAscii&&caracterAscii<127) {
 tipoConvertir="caracteresEspeciales4";

 }else{tipoConvertir="noConvertir";}

 let rangoInferior=0;
 let rangoSuperior=0;

//SEGUN TIPO DE CARACTER DETECTADO, ENTREGA PARAMETROS Y LLAMA A LA FUNCION PARA CIFRADO-DESCIFRADO
switch (tipoConvertir) {
  case ("mayusculas"):
  rangoInferior=65;
  rangoSuperior=90; /* Para calcular extensión del rango*/
  cifrado=(cipher.aplicaFormulaCifrarDescifrar(cifrado,caracterAscii,offset,rangoInferior,rangoSuperior));
  break;


  case ("minusculas"):
  rangoInferior=97;
  rangoSuperior=122; /* Para calcular extensión del rango*/
  cifrado=(cipher.aplicaFormulaCifrarDescifrar(cifrado,caracterAscii,offset,rangoInferior,rangoSuperior));
  break;

      case ("numeros"):
        rangoInferior=48;
      rangoSuperior=57; /* Para calcular extensión del rango*/
      cifrado=(cipher.aplicaFormulaCifrarDescifrar(cifrado,caracterAscii,offset,rangoInferior,rangoSuperior));
        break;

        case ("caracteresEspeciales"):
        rangoInferior=32;
        rangoSuperior=47; /* Para calcular extensión del rango*/
        cifrado=(cipher.aplicaFormulaCifrarDescifrar(cifrado,caracterAscii,offset,rangoInferior,rangoSuperior));
        break;

        case ("caracteresEspeciales2"):
        rangoInferior=58;
        rangoSuperior=64; /* Para calcular extensión del rango*/
        cifrado=(cipher.aplicaFormulaCifrarDescifrar(cifrado,caracterAscii,offset,rangoInferior,rangoSuperior));
        break;

        case ("caracteresEspeciales3"):
        rangoInferior=91;
        rangoSuperior=96; /* Para calcular extensión del rango*/
        cifrado=(cipher.aplicaFormulaCifrarDescifrar(cifrado,caracterAscii,offset,rangoInferior,rangoSuperior));
        break;

        case ("caracteresEspeciales4"):
        rangoInferior=123;
        rangoSuperior=126; /* Para calcular extensión del rango*/
        cifrado=(cipher.aplicaFormulaCifrarDescifrar(cifrado,caracterAscii,offset,rangoInferior,rangoSuperior));
        break;





        default:
        cifrado=cifrado+analisisMensaje[i];
        console.log(cifrado);
        }
      }return cifrado  },




//FUNCION PARA CIFRADO-DESCIFRADO
aplicaFormulaCifrarDescifrar: (cifrado, caracterAscii,offset,rangoInferior,rangoSuperior) => {
let rangoExtension=rangoSuperior-rangoInferior+1;
cifrado=cifrado+(String.fromCharCode((((((caracterAscii-rangoInferior)+(offset%rangoExtension))+rangoExtension)%rangoExtension)+rangoInferior)))
return cifrado;
},
}
