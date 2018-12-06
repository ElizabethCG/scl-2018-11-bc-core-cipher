# Querido Diario.

### Quiénes son los usuarios y su relación con el producto.
### Cómo el producto soluciona los problemas/necesidades de los usuarios.

debe explicar cómo descargar, instalar y ejecutar la aplicación
así como una introducción a la aplicación, su funcionalidad y decisiones de
diseño que tomaron.




**_Querido Diario_** es una aplicación pensada para todas aquellas mujeres, pequeñas o grandes, que desean mantener un registro de su día a día, pero les interesa que su información se mantenga en secreto y no accesible a otras personas.



![Querido-Diario](https://github.com/ElizabethCG/imagenes/blob/master/Pant-Principal-Querido-Diario.png)


**_Querido Diario_** cuenta con la metodología de [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher), que valiéndose de un código de encriptación secreto suministrado por el usuario,  permite cifrar el párrafo escrito, dejándolo ilegible para cualquier otra persona que no conozca dicho código de cifrado.


![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

***


## Como funciona

Para guardar un mensaje primero escríbelo en la caja de texto,  luego ingresa el código de encriptación. Este código debe ser un número, de preferencia entre 1 y 25, aunque puedes elegir el número que tú desees. Una vez indicado el número presiona el botón cifrar.
Automáticamente podrás ver como queda tu mensaje encriptado. Si deseas almacenar este texto, córtalo y pégalo en el editor de texto de preferencia o en tu block de notas, pero recuerda guardar el código de encriptación, de esta forma podrás descifrar tu texto en el futuro.

Para descifrar un mensaje ya encriptado corta y pega el párrafo en la caja de texto, indica el código de cifrado que utilizaste originalmente y luego presiona el botón descifrar. Con esto podrás visualizar tu mensaje nuevamente.


## Instalación

Por el momento esta app no requiere instalación, ya que se accede a ella en modo local.


# Proceso y decisiones de diseño.
El formato está diseñado de tal forma que una persona puede acceder secuencialmente a las diversas opciones disponibles una vez que haya activado el requisito anterior.
Ej. Si quieres cifrar un mensaje, los botones estarán desactivados hasta el momento en que hayas escrito tu texto e indicado el código de cifrado, ya que son prerequisitos para realizar el cifrado.

En la parte superior aparece un breve texto de presentación de la aplicación y las opciones de revisar las instrucciones en caso de requerirlas o bien, leer más sobre la metodología de cifrado empleada.
Dichas opciones estarán siempre visibles para dar la oportunidad al usuario de acceder a ellas de forma rápida en caso se precisarlo.

El color de fondo pretente aportar un aire de feminidad, creatividad e imaginación a la página, ya que son conceptos frecuentemente asociados a la escritura de un diario personal femenino y secreto.

Siguiendo en la linea anterior, se incorpora una imagen de fondo que permita un contraste, pero con una temática emimentemente femenina y fresca.



# Test aplicados:

Para ejecutar los test se debe correr la instrucción "npm test". El resultado en la consola es el siguiente:

```text

  cipher
    √ debería ser un objeto
    cipher.encode
      √ debería ser una función
      √ debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33
    cipher.decode
      √ debería ser una función
      √ debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33


  5 passing (29ms)

-----------|----------|----------|----------|----------|-------------------|
File       |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-----------|----------|----------|----------|----------|-------------------|
All files  |    72.73 |       50 |      100 |    71.88 |                   |
 cipher.js |    72.73 |       50 |      100 |    71.88 |... 49,50,51,53,60 |
-----------|----------|----------|----------|----------|-------------------|
```


![Test-aplicados](https://github.com/ElizabethCG/imagenes/blob/master/test.png)



### Interfaz de usuario (UI)

  La interfaz permite al usuario:
  - Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
  - Insertar un mensaje (texto) que queremos cifrar.
  - Ver el resultado del mensaje cifrado.
  - Insertar un mensaje (texto) a descifrar.
  - Ver el resultado del mensaje descifrado.
  - Revisar más información sobre la metodología de cifrado empleada.
  - Leer las instrucciones para la utilización de la aplicación.



Diseño de experiencia de usuario (User Experience Design):

- Ideación
- Prototipado (sketching)
- Testeo e Iteración

Desarrollo Front-end:

* Valores
* Tipos
* Variables
* Control de flujo
* Tests unitarios


##Mejoras futuras

Esta versión de la aplicación no considera el cifrado de letras ñ ni otros caracteres epeciales (como espacios, puntuación, ñ, ...). Solamente se acota al cifrado del alfabeto español sin ñ, tanto mayúsculas como minúsculas.
Cuando el usuario ingresa un caracter diferente, el caracter se condiera en el texto, pero sin cifrarse.

El offset solo se considera para números enteros positivos.

En una versión futura se considerará la mejora para ambas situaciones.




## Consideraciones Técnicas

La lógica del proyecto está implementada completamente en JavaScript (ES6).
En este proyecto no usa librerías o frameworks, sólo
[vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).

No se usa la _pseudo-variable_ `this`.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_
y _lines_, y un mínimo del 50% de _branches_. El _boilerplate_ ya contiene el
setup y configuración necesaria para ejecutar los tests (pruebas) así como _code
coverage_ para ver el nivel de cobertura de los tests usando el comando `npm
test`.


Para comenzar este proyecto se realizó un _fork_ y _clonar_ el
repositorio que contenía el _boilerplate_.

Estructura de archivos utilizada:
Configuración de dependencias y test:

```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
|   ├── fondo.jpg
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── cipher.spec.js
    ├── headless.js
    └── index.html
```

Se incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guías de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas (tests) cuando usamos el comando
`npm run test`. En el caso de `JavaScript` estamos usando un archivo de
configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre el parser que usar (qué version de JavaScript/ECMAScript), el
entorno (browser en este caso) y las [reglas recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).
En cuanto a reglas/guías de estilo en sí,
usaremos las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint`.
