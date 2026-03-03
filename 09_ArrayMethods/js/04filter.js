// Filter: Crea un nuevo arreglo basado en el parametro que es evaluado
let carrito = [
  { nombre: "Monitor 24 Pulgadas", precio: 259 },
  { nombre: "Monitor 27 Pulgadas", precio: 359 },
  { nombre: "Monitor 25 Pulgadas", precio: 339 },
  { nombre: "Audifonos", precio: 159 },
];

// Itera el array y le asigna a la variable todos los productos mayores a 300.
let resultado = carrito.filter((producto) => producto.precio > 300);
resultado = carrito.filter((producto) => producto.precio < 600);
resultado = carrito.filter((producto) => producto.nombre !== "Audifonos");

console.log(resultado);
