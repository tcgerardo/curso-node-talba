//Este archivo se utiliza para crear variables que el usuario pueda requerir desde la consola
//Todas estas variables utilizan un argumento y descripción para al ejecutar el comando -help, puedas leer para que 
//se requieren


const { describe } = require('yargs');
const colors = require('colors');

const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la tabla de multiplicar'
        })
        // Ejercicio: Creamos una variable de listado, si
        // l esta por defecto, no me muestra la lista de la tabla
        // en consola, si es caso contrario ("-l False") muestra
        .option('l', {
            alias: 'listado',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla en consola'
        })
        .option ('h',{
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Hasta que número debe multiplicar el programa'
        })
        .check((argv, options) => {
            if(isNaN( argv.b )){
                throw 'La base tiene que ser un número'
            }
            return true;
        })
        .check((argv, options) => {
            if(isNaN( argv.h )){
                throw 'El límite tiene que ser un número'
            }
            return true;
        })
        .argv;

 //Sirve para exportar el archivo fuera de este.
module.exports = argv;