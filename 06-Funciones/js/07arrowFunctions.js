// Arrow functions en JS

// Expresion de funcion
const estudio = function (valorPa) {
  console.log(`Estudiando ${valorPa}`);
};
estudio("JS");

// Arrow function
const estudio2 = (valorPa) => console.log(`Estudiando ${valorPa}`);
estudio2("JS");

// Arrow functions en forEach y Map
let carrito = [
  { nombre: "Monitor 24 Pulgadas", precio: 259 },
  { nombre: "Monitor 27 Pulgadas", precio: 359 },
  { nombre: "Monitor 25 Pulgadas", precio: 339 },
  { nombre: "Monitor 21 Pulgadas", precio: 159 },
];

const nuevoArreglo = carrito.map(
  (producto) => `Nombre del producto: ${producto.nombre}`
);
console.log(nuevoArreglo);

carrito.forEach((producto) =>
  console.log(`Nombre del producto: ${producto.nombre}`)
);

// Arrow functions en metodos de propiedad
const reproductor = {
  reproducir: (id) => console.log(`Reproduciendo cancion ${id}`),
  pausar: () => console.log(`Pausando`),
  crearPlaylist: () => prompt("Ingresa un nombre de playlist: "),
  reproducrirPlaylist: (nombrePlaylist) =>
    console.log(`Reproduciendo playlist: ${nombrePlaylist}`),

  set nuevaCancion(nombreCancionPa) {
    this.nombreCancionPa = nombreCancionPa;
    console.log(`Añadiendo ${nombreCancionPa}`);
  },
  get obtenerCancion(){
    console.log(this.nombreCancion);
  }
};
reproductor.reproducir(20);
reproductor.crearPlaylist();
reproductor.reproducrirPlaylist("K-Pop");
