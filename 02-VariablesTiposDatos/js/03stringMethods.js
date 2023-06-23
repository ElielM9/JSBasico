// String methods en JS
const producto = `Monitor 24 pulgadas`;
console.log(producto);

// Cuantas letras tiene el string
console.log(producto.length);

// Saber si una palabra existe en el string
console.log(producto.indexOf("Monitor")); // La posicion en la que se encuentra
console.log(producto.includes("Monitor"));

// Concatenar texto y template strings
const precio = "70 USD";

// Concatenar de la forma anterior
console.log(producto.concat(precio));
console.log(producto + " con precio de " + precio);

// Template strings
console.log(`Producto: ${producto} Preccio: ${precio}`);

// Eliminar espacio en blanco al inicio o al final.
console.log(producto.length);

// Eliminar del inicio
console.log(producto.trimStart());

// Eliminar espacio al final
console.log(producto.trimEnd());

// Eliminar en ambas direcciones
console.log(producto.trimStart().trimEnd());
console.log(producto.trim());

// Reemplazar un texto de una cadena
console.log(producto.replace(`pulgadas`, `'`));
console.log(producto.replace(`Monitor`, `Monitor curvo`));

// Cortar una parte de un string
console.log(producto.slice(0, 10));

// Alternativa
console.log(producto.substring(0, 10));

//Repetir una cadena de texto
const texto = "En promocion ".repeat(3);

console.log(texto);
console.log(`${producto} ¡${texto}! `);

// Dividir un string
const actividad = "Aprendiendo ingles";
console.log(actividad.split(" "));

const hobbies = "Programar, dibujar, jugar videojuegos, ver peliculas";
console.log(hobbies.split(", "));

// Convertir a mayusculas y minusculas

// Mayusculas
console.log(producto.toUpperCase());

// Minusculas
console.log(producto.toLocaleLowerCase());

