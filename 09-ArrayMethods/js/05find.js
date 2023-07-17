// Find: Crea un nuevo array basado en la condicion que estas revisando
let carrito = [
  { nombre: "Monitor 24 Pulgadas", precio: 259 },
  { nombre: "Tablet", precio: 359 },
  { nombre: "Monitor 25 Pulgadas", precio: 339 },
  { nombre: "Celular", precio: 159 },
];

// ForEach
let resultado = ``;
carrito.forEach((producto, index) => {
  if (producto.nombre === `Tablet`) {
    resultado = carrito[index];
  }
});

console.log(resultado);

// Find: Solo retorna el primer elemento que cumpla con la condicion
const resultado2 = carrito.find((producto) => producto.nombre === `Tablet`);
console.log(resultado2);
