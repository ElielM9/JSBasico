// Destructuring de Arreglos en JS
let numeros = [1, 2, 3, 4, 5];

let [numero1] = numeros;
let [,, numero3, ...cuarto] = numeros; // Acceder a un valor especifico

console.log(numero1);
console.log(numero3);
console.log(cuarto);