// Objetos en JS

// Definirr un objeto (Object literal)
const producto = {
  nombre: "Monitor",
  precio: 300,
  disponible: true,
};

console.log(producto);

// Acceder a los valores del objeto
console.log(producto.precio); // Objeto.valor
console.log(producto["disponible"]); // Objeto["valor"]

// Agregar y Eliminar propiedades al objeto

// Agregar una propiedad al objeto
producto.imagen = "img.jpg";

// Eliminar una propiedad del objeto
delete producto.disponible;
