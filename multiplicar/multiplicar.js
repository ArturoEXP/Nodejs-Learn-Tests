//requires
const fs = require('fs');
const colors = require('colors');


let listarArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`.red)
            return;
        } else if (!Number(limite)) {
            reject(`El valor introducido ${ limite } no es un número`.red)
            return;
        }

        console.log(`====================================================`.green);
        console.log(`=============Tabla de multiplicar de ${ base }=============`.green);
        console.log(`====================================================`.green);

        for (let i = 1; i <= limite; i++) {

            console.log(` ${ base } *  ${ i } = ${ base * i}`.blue);

        }
    })
}


let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`.red)
            return;
        } else if (!Number(limite)) {
            reject(`El valor introducido ${ limite } no es un número`.red)
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += ` ${ base } *  ${ i } = ${ base * i} \n`;

        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }.txt`)

            console.log(`El archivo tabla${ base }-al-${ limite }.txt ha sido creado!`.blue);

        });

    })
}

module.exports = {
    crearArchivo,
    listarArchivo
}