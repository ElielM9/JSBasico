// Metodos para los arrays en JS
let carrito = [];

// Añadir elementos al final o inicio del arreglo
const producto = {
  nombre: "Monitor",
  precio: 200,
};

const producto2 = {
  nombre: "Teclado",
  precio: 30,
};

// Al final
carrito.push(producto);
console.log(carrito);

// Al inicio
carrito.unshift(producto2);
console.log(carrito);

// Spread operator
let resultado;

resultado = { ...carrito, ...producto };
console.log(resultado);


// Eliminar elementos de un array

// Ultimo elemento
carrito.pop(); 
console.log(carrito);

// Primer elemento 
carrito.splice(0, 1);
console.log(carrito);



