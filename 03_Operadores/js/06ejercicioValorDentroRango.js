// Ejercicio valor dentro de rango

let min = 0;
let max = 5;
let dato;

// Pedir valor al usuario
dato = parseInt(prompt(`Ingresa un valor`));

let dentroRango = dato > min && dato <= max; 
alert(`Valor dentro del rango?: ${dentroRango}`);

