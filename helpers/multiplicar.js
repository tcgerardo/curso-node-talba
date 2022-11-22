
const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors');

// base es que en caso no tener ni una en mi app.js se da por defecto el 5
// Se pueden agregar diferentes variables "v" dentro de la misma función
const crearArchivo = async ( base, listar = false, hasta = 10) => {
   
    try { 
        let salida = '';
        let  consola = '';

// Crea una tabla de multiplicar dependiendo del numero de la base
      
    for  (let i = 1; i <= hasta; i++ ){
        salida  +=   `${base} X ${ i } = ${ base * i }\n` ;
        consola  +=   `${base} ${ 'X'.green } ${ i } = ${ base * i }\n` ;
    }

    // If "listar" esta en true por defecto, me muestre, si no,
    //oculte la tabla
    if (listar) {        
        console.log('====================='.green);
        console.log( '  Tabla del:'.yellow, colors.red(base) );
        console.log('====================='.green);

        console.log(consola);
        }
// la imprime
        
// Crea un archivo deo textod de nuestra tabla previamente hecha con el directorio writefileSync

        fs.writeFileSync( `./salida/tabla- ${base}.txt`, salida );
        return `tabla-${ base }.txt`;
    } catch (err) {
        return err;
    }   
}

//Sirve para exportar el archivo fuera de este.
module.exports = {
    crearArchivo
}
