// Objetos dentro de objetos en JS
const producto = {
  nombre: "Monitor",
  precio: 300,
  disponible: true,
  info: {
    medidas: {
      altura: 1,
      peso: 2,
    },
    fabricacion: {
      pais: "China",
    },
  },
};

console.log(producto);

console.log(producto.info);
console.log(producto.info.medidas.peso);
console.log(producto.info.fabricacion.pais);

// Destructuring en objetos anidados
const {
  nombre,
  info,
  info: {
    fabricacion: { pais },
  },
} = producto;
// Imprimir variables 
console.log(nombre);
console.log(info);
console.log(pais);
