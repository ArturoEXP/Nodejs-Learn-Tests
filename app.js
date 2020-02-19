const argv = require('./config/yargs').argv;

const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarArchivo } = require('./multiplicar/multiplicar');

let comando = argv._[0];


switch (comando) {
    case 'listar':
        console.log('Listar');
        listarArchivo(argv.base, argv.limite)
            .catch(e => console.log(e));
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e));
        break;
    case 'borrar':
        console.log('Borrar');
        break;
}


//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1]

//console.log('Limite', argv.limite);

/*
 */
