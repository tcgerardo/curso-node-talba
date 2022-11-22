//Todas estas constantes o varialbes son necesarias para conectar con los otros archivos de Js
const { Console } = require('console');
const { demand } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');


console.clear();

// Para mandar argumentos a la consola, tomando la variable
// base como inicial 5 o definirla el usuario.

       // const [ , ,arg3 = 'base=5'] = process.argv;
       // const [ , base = 5] = arg3.split('=');

crearArchivo ( argv.b, argv.l, argv.h )
    .then (nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch (err => console.log(err));