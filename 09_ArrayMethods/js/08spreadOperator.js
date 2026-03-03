// Spread operator
let meses = ["Enero", "Febrero", "Marzo"];
let carrito = [
  { nombre: "Monitor 24 Pulgadas", precio: 259 },
  { nombre: "Tablet", precio: 359 },
  { nombre: "Monitor 25 Pulgadas", precio: 339 },
  { nombre: "Celular", precio: 159 },
];

// Spread operator con arreglo de indices
// No se modifica el array originalf
const meses2 = [...meses, "Abril"];
// meses.push("Mayo"); // Modifica el arrayl original

console.log(meses2);

const producto = { nombre: "Disco duro", precio: 35 };

const carrito2 = [...carrito, producto];
console.log(carrito2);
