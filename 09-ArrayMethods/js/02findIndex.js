// FindIndex: Sirve para saber en que indice del array se encuentra un elemento de él.
let meses = ["Enero", "Febrero", "Marzo"];
let carrito = [
  { nombre: "Monitor 24 Pulgadas", precio: 259 },
  { nombre: "Monitor 27 Pulgadas", precio: 359 },
  { nombre: "Monitor 25 Pulgadas", precio: 339 },
  { nombre: "Monitor 21 Pulgadas", precio: 159 },
];

meses.forEach((mes, index) => {
  console.log(index);
});

// Encontrar el indice de meses
const indice = meses.findIndex((mes) => {
  mes === "Enero";
});

console.log(indice); // Si el valor no existe retorna un -1

// Encontrar el indice en el array de objetos
const index = carrito.findIndex((producto) => producto.precio === 159);

console.log(index);
