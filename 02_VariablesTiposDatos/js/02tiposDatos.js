// Tipos de datos en JS

// Tipos dinamicos: En js las variables son dinamicas, pueden recibir cualquier tipo de dato en caulquier momento.
let numero1 = 5;
numero1 = "5";

// Numeros: Todos los tipos numericos son numeros en JS
// Numeros enteros
let entero = 10;
let numero2 = new Number(20); // Crear objeto de tipo number

console.log(entero);

// Numeros flotantes
let flotante = 5.5;
console.log(flotante);

console.log(typeof entero); // Saber el tipo de dato
console.log(typeof flotante);

// Strings: Objetos que se usan para almacenar datos representados en forma de texto.

// Hay tres formas de declarar strings en JS
let cadena = "Hola";
let cadena2 = String("hola a todos");
let cadena3 = new String("hola mundo"); // Crear objeto de tipo string, es el menos común.

console.log(cadena);

// Booleans: Solo reciben dos valores, true o false.
let boolean = true;
let boolean2 = new Boolean(true); // Crear objeto de tipo boolean
console.log(boolean);

// Undefined, null y NaN
/* 
   Undefined: Representa un valor ausente, es decir, una variable que no tiene valor y no se le asignó ninguno al crearla.
   Null: Es una variable vacía, pero la diferencia es que es un valor asignado por el programador.
   NaN: Sale cuando se asignan o tratan de hacer operaciones con tipos de datos no numéricos. 
*/
