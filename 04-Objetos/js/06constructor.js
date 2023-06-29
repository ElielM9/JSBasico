// Constructor en JS

// Crear objetos con object literal
const producto = {
  nombre: "Monitor",
  precio: 300,
  disponible: true,
};
console.log(producto);


// Constructor
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true; 
}

const producto2 = new Producto("Monitor BenQ", 250); 
console.log(producto2);