// Metodos de objetos en JS
`use strict`; // Es el modo estricto de JS

const producto = {
  nombre: "Monitor",
  precio: 300,
  disponible: true,
};
producto.imagen = "img.jpg";

console.log(producto);

// Congelar el objeto para que no se pueda modificar
Object.freeze(producto);

producto.disponible = false;

console.log(Object.isFrozen(producto)); // Saber si está congelado


// Sella el objeto: No se pueden agregar ni eliminar propiedades pero sí modificar las existentes. 
Object.seal(producto); 

// Copiar dos objetos y unirlos. 
const medidas = {
    peso: 1, 
    medida: 1
}; 

const resultado = Object.assign(medidas, producto); 

// Spread Operator / Rest operator 
const resultado2 = {...producto, ...medidas};

// Retorna un arreglo con las llaves del objeto: Se usa para saber si está vacío
console.log(Object.keys(producto)); 

// Retorna los valores 
console.log(Object.values(producto));

// Retorna todos los atributos del objeto
console.log(Object.entries(producto));