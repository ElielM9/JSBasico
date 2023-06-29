// Destructuring de objetos en JS: Acceder a los valores de un objeto y asignarlos a una variable

const producto = {
  nombre: "Monitor",
  precio: 300,
  disponible: true,
};

// Forma anterior
const NOMBRE = producto.nombre;
console.log(NOMBRE);

// Object Destructuring: Extraer del objeto y crear variable.
const { nombre, precio } = producto;
console.log(nombre);
console.log(precio);

