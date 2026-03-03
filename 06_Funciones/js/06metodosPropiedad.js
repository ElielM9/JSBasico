// Metodos de propiedad
const reproductor = {
  reproducir: function (id) {
    console.log(`Reproduciendo cancion ${id}`);
  },
  pausar: function () {
    console.log(`Pausando`);
  },
  crearPlaylist: function () {
    prompt("Ingresa un nombre de playlist: ");
  },
  reproducrirPlaylist: function (nombrePlaylist) {
    console.log(`Reproduciendo playlist: ${nombrePlaylist}`);
  }
};

reproductor.reproducir(20);

// Agregar nuevo metodo de propiedad
reproductor.borrar = function (id) {
  console.log(`Borrando cancion ${id}`);
};

reproductor.borrar(30); 
reproductor.crearPlaylist(); 
reproductor.reproducrirPlaylist("K-Pop"); 