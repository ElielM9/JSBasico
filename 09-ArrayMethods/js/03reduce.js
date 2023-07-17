// Reduce: Usa una funcion reductora, es decir, toma una gran cantidad de datos y nos devuelve un resultado.
let carrito = [
  { nombre: "Monitor 24 Pulgadas", precio: 259 },
  { nombre: "Monitor 27 Pulgadas", precio: 359 },
  { nombre: "Monitor 25 Pulgadas", precio: 339 },
  { nombre: "Monitor 21 Pulgadas", precio: 159 },
];

// ForEach
let total = 0;
carrito.forEach((producto) => (total += producto.precio));
console.log(`Total a pagar: ${total}`);

// Hacerlo con un reduce
let resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado);