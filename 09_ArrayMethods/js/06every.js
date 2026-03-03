// Every: Todos los elementos de un array deben cumplir una condicion para que retorne un true.
let carrito = [
  { nombre: "Monitor 24 Pulgadas", precio: 259 },
  { nombre: "Tablet", precio: 359 },
  { nombre: "Monitor 25 Pulgadas", precio: 339 },
  { nombre: "Celular", precio: 159 },
];

const resultado = carrito.every((producto) => producto.precio < 1000);
console.log(resultado);
