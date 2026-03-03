// Some en JS
let meses = ["Enero", "Febrero", "Marzo"];
let carrito = [
  { nombre: "Monitor 24 Pulgadas", precio: 259 },
  { nombre: "Monitor 27 Pulgadas", precio: 359 },
  { nombre: "Monitor 25 Pulgadas", precio: 339 },
  { nombre: "Monitor 21 Pulgadas", precio: 159 },
];

// Comprobar si un valor existe en un array
meses.forEach((mes) => {
  console.log(mes);
  if (mes == "Enero") {
    console.log("Enero si existe");
  }
});

// Includes: Solo funciona con arrays que tienen valores basados en indices
const resultado = meses.includes("Diciembre");
console.log(resultado);

// Some: Itera los valores de un array de objetos y devuelve un resultado si existe o no.
const existe = carrito.some((producto) => producto.nombre === "Celular");
console.log(existe);

// Some en un array comun
const existe2 = meses.some((mes) => {
  return mes === "Enero";
});

console.log(existe2);
