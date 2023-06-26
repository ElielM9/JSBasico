// Tipos de datos en JS

// Tipos dinamicos: En js las variables son dinamicas, pueden recibir cualquier tipo de dato en caulquier momento.
let numero1 = 5;
numero1 = "5";

// Numeros enteros
let entero = 10;
let numero2 = new Number(20); // Crear objeto de tipo number

console.log(entero);

// Numeros flotantes
let flotante = 5.5;
console.log(flotante);

console.log(typeof entero); // Saber el tipo de dato
console.log(typeof flotante);

// Strings

// Hay tres formas de declarar strings en JS
let cadena = "Hola";
let cadena2 = String("hola a todos");
let cadena3 = new String("hola mundo"); // Crear objeto de tipo string, es el menos común.

console.log(cadena);

// Booleans
let boolean = true;
console.log(boolean);
