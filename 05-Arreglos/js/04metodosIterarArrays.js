// Metodos para iterar arrays
let carrito = [
  { nombre: "Monitor 24 Pulgadas", precio: 259 },
  { nombre: "Monitor 27 Pulgadas", precio: 359 },
  { nombre: "Monitor 25 Pulgadas", precio: 339 },
  { nombre: "Monitor 21 Pulgadas", precio: 159 },
];

// ForEach: Itera sobre cada eleento del array y ejecuta una funcion en cada uno. 
carrito.forEach(function (producto) {
  console.log(`Nombre del producto: ${producto.nombre}`);
});

// Map: Itera sobre cada elemento del array y ejecuta una funcion en cada uno para al final devolver los resultados en un nuevo array. No modifica el array original, crea uno nuevo. 
const nuevoArreglo = carrito.map(function (producto) {
  return `Nombre del producto: ${producto.nombre}`;
});

console.log(nuevoArreglo);
