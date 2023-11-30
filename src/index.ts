let mensaje: string = "hola mundo"
mensaje = " Hola jose david este es tu primer hola mundo en TypeScript"

mensaje = "chao mundo"
console.log(mensaje)
console.log(typeof [])

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
let extincionDinosaurios = 76_000_000
let dinosaurioFavorito = "T-Rex"
let extintos = true

// let mivariable | eny no lo usemos
// mivariable = "chanchito feliz"
// mivariable = 2
// mivariable = false
// mivariable = "colombia"

function chanchitoFeliz(config:any){
    return config
}

//Array
// Array inferido del tipo de dato
let animales = ["vaca", "perro", "gato"]

// Array de tipo de dato
let animales2: string[] = ["vaca", "perro", "gato"]
let nums: number = 4
let numeros: number[] = [1,2,3,4,5,6,7,8,9,10]
// inicializamos sin darle valor para queno sea any
let checks: boolean[] = [] 
let nums2: Array<number> = []

// Funcionalidades de TypeScript
// nums.map(x => x.)  // el autocompletado sugiere el tipo de datos despues del punto

// Tuplas en JavasScript no existe, pero TypeScript lo soporta
//las tuplas solo nos permite colocar datos pero si estan declarados los tipos de datos.
let tupla: [number,string] = [1, "hola jose"]

// aca miramos como agregarles mas datso a una tupla con un Array

let tupla2: [number,string[]] = [1, ["hola jose","hola"]]

//error actualmente de typeScript:
// si tenemos una tupla y estamso usando push typeScript no nolos permite
// tupla.push("hola jose") 

//  Enum  : Este typo de dato no existe en Javascript pero si en TypeScript Enums

const chica = "s"
const mediana = "m"
const grande = "l"
const extragrande = "xl"

//PascalCase
enum Tallas {
    Chica = "s",
    Mediana = "m",
    Grande = "l",
    ExtraGrande = "xl"
}
const variable1 = Tallas.Grande
console.log(variable1)

// estados de cargas

const enum LoadingState {
    Idle, // no hemos iniciado la carga
    Loading, //cargando
    Success, // tuvimos exito
    Error    // tuvimos error
}
const estado = LoadingState.Success

// Objetos POO

// Esta es una forma de hacerlo pero no optima
// const objeto = {id: 1, nombre:""}
// objeto.nombre = "hola mundo"


// Creacion de objetos correctamente.
type Direccion = {
    numero: number,
    calle: string,
    pais: string
}

type persona = {
    readonly id: number,
    nombre: string,
    tallas: Tallas,
    direccion:Direccion
}

const objeto: persona = {
    id: 1,
    nombre: "hola mundo jose",
    tallas: Tallas.Mediana,
    direccion: {
        numero: 1234,
        calle: "calle gaitan",
        pais: "colombia"
    }
}

// arreglos del objeto persona solo hay elementos del objeto personas

const arr: persona[] = []
