// Agregar elementos a LocalStorage

// Almacena unicamente strings
localStorage.setItem(`Nombre`, `Valor`);

const producto = {
  nombre: "Monitor",
  precio: 300,
};

// Convertir un elemento a string para almacenarlo
const productoString = JSON.stringify(producto);
localStorage.setItem(`Producto`, productoString);

