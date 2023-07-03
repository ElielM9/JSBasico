// Arreglos en JS

// Defincion de un arreglo
let arreglo = [1, 2, 3, 4, 5];

// Forma alternativa
let meses = new Array("Enero", "Febrero", "Marzo");

// Arrays con distintos tipos de datos
const array = [
  10,
  "hola",
  true,
  null,
  { nombre: "Juan", trabajo: "Programador" },
  [1, 2, 3],
];

// Acceder a los valores de un array
console.log(arreglo[1]);

// Recorrer un array
for (let i = 0; i < meses.length; i++) {
  console.log(meses[i]);
}


// Agregar valores a un array
arreglo[5] = 10; 
