# Querido Diario.

### Quiénes son los usuarios y su relación con el producto.
### Cómo el producto soluciona los problemas/necesidades de los usuarios.

**_Querido Diario_** es una aplicación pensada para todas aquellas mujeres, pequeñas o grandes, que desean mantener un registro de su día a día, pero les interesa que su información se mantenga en secreto y no accesible a otras personas.

**_Querido Diario_** cuenta con la metodología de [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher), que valiéndose de un código de encriptación secreto suministrado por el usuario,  permite cifrar el párrafo escrito, dejándolo ilegible para cualquier otra persona que no conozca dicho código de cifrado.


![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

***


## Como funciona

Para guardar un mensaje primero escríbelo en la caja de texto,  luego ingresa el código de encriptación. Este código debe ser un número entre 2 y 99. Una vez indicado el número presiona el botón cifrar.
Automáticamente podrás ver como queda tu mensaje encriptado. Posteriormente, corta y pega en tu diario el texto encriptado y guarda el código de encriptación, de esta forma puedras recuperar el texto en el futuro.

Para descifrar un mensaje ya encriptado corta y pega el párrafo en la caja de texto y luego elige la opción descifrar, indicando previamente el código numérico de cifrado que utilizaste la primera vez, al momento de cifrar tu mensaje.


## Instalación

Por el momento esta app no requiere instalación, ya que se accede a ella en modo local.


# Proceso y decisiones de diseño.
Proporciona calma.
Muchas marcas lo utilizan para representar la creatividad, la imaginación y la sabiduría.
Se asocia a lo femenino, a la magia y la espiritualidad.







# Test aplicados:


debe explicar cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.


### Interfaz de usuario (UI)

  La interfaz permite al usuario:
  - Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
  - Insertar un mensaje (texto) que queremos cifrar.
  - Ver el resultado del mensaje cifrado.
  - Insertar un mensaje (texto) a descifrar.
  - Ver el resultado del mensaje descifrado.



cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso para definir el producto final a nivel de experiencia y de interfaz.

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

La descripción general de este proyecto no menciona qué pasaría con las letras minúsculas y otros caracteres (como espacios, puntuación, ñ, ...). El boilerplate incluye algunos tests (comentados en principio) que puedes usar como punto de partida para implementar el soporte para estos casos.

Tampoco se menciona qué pasaría si el offset fuera negativo. Como parte del hacker edition te invitamos a explorar también esta caso por tu cuenta.







## Vamos a los detalles. Consideraciones Técnicas

La lógica del proyecto está implementada completamente en JavaScript (ES6).
En este proyecto no usa librerías o frameworks, sólo
[vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).

No se usa la _pseudo-variable_ `this`.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_
y _lines_, y un mínimo del 50% de _branches_. El _boilerplate_ ya contiene el
setup y configuración necesaria para ejecutar los tests (pruebas) así como _code
coverage_ para ver el nivel de cobertura de los tests usando el comando `npm
test`.

El _boilerplate_ incluye tests (pruebas) de ejemplo como punto de partida.



Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio que contiene el _boilerplate_.

Estructura de archivos:
como toda la configuración de dependencias y tests de ejemplo:

```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── cipher.spec.js
    ├── headless.js
    └── index.html
```

El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guías de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas (tests) cuando usamos el comando
`npm run test`. En el caso de `JavaScript` estamos usando un archivo de
configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre el parser que usar (qué version de JavaScript/ECMAScript), el
entorno (browser en este caso) y las [reglas recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).
En cuanto a reglas/guías de estilo en sí,
usaremos las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint`.
