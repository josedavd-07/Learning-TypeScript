var mensaje = "hola mundo";
mensaje = " Hola jose david este es tu primer hola mundo en TypeScript";
mensaje = "chao mundo";
console.log(mensaje);
console.log(typeof []);
console.log(Array.isArray([1, 3, 5]));
// console,log(Arrayis.arragit ys [])
/* tipos de datos nativos en Javascript*/
/**
 * number
 * string
 * boolean
 * null
 * undefined
 * object
 * function
 */
//  tipos de datos en TypeScript
/**
 * any  // no usarlo pero saberlo usar y que hace
 * unknown
 * never
 * arrays
 * tuplas
 * Enums
 * Tipos inferidos
 * cuando se inicializa una variabel typeScript sabe que   tipo de dato es
 */
// si inicializamos el valor typeScript sabe que tipo de dato es.
// pero si no se inicializa se debe asignar el tipo de dato
// para luego darle valor
var extincionDinosaurios = 76000000;
var dinosaurioFavorito = "T-Rex";
var extintos = true;
// let mivariable | eny no lo usemos
// mivariable = "chanchito feliz"
// mivariable = 2
// mivariable = false
// mivariable = "colombia"
function chanchitoFeliz(config) {
    return config;
}
//Array
// Array inferido del tipo de dato
var animales = ["vaca", "perro", "gato"]; // string
// Array de tipo de dato
var animales2 = ["vaca", "perro", "gato"];
var nums = 4;
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// inicializamos sin darle valor para queno sea any
var checks = [];
// let nums2: Array<number> = [] // notacion deprecada
// Funcionalidades de TypeScript
// nums.map(x => x.)  //el autocompletado sugiere el tipo de datos despues del punto
// Tuplas en JavasScript no existe, pero TypeScript lo soporta
//las tuplas solo nos permite colocar datos pero si estan declarados los tipos de datos.
var tupla = [1, "hola jose"];
// aca miramos como agregarles mas datso a una tupla con un Array
var tupla2 = [1, ["hola jose", "hola"]];
//error actualmente de typeScript:
// si tenemos una tupla y estamso usando push typeScript no nolos permite
// tupla.push("hola jose") 
//  Enum  : Este typo de dato no existe en Javascript pero si en TypeScript Enums
var chica = "s";
var mediana = "m";
var grande = "l";
var extragrande = "xl";
//PascalCase
var Tallas;
(function (Tallas) {
    Tallas["Chica"] = "s";
    Tallas["Mediana"] = "m";
    Tallas["Grande"] = "l";
    Tallas["ExtraGrande"] = "xl";
})(Tallas || (Tallas = {}));
var variable1 = Tallas.Grande;
console.log(variable1);
var estado = 2 /* LoadingState.Success */;
var objeto = {
    id: 1,
    nombre: "hola mundo jose",
    tallas: Tallas.Mediana,
    direccion: {
        numero: 1234,
        calle: "calle gaitan",
        pais: "colombia"
    }
};
// arreglos del objeto persona solo hay elementos del objeto personas
var arr = [];
