// Obtener datos almacenados en LocalStorage
const nombre = localStorage.getItem(`Nombre`)

console.log(nombre);


const productoJSON = localStorage.getItem(`Producto`)

// Convertir un string a objeto o arreglo si tiene la forma correcta
console.log(JSON.parse(productoJSON));
