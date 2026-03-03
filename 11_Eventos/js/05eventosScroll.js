// Eventos del scroll
window.addEventListener(`scroll`, () => {
  const scrollPx = window.scrollY; // Saber la cantidad de scroll que da
  const premium = document.querySelector(`.premium`);
  const ubicacion = premium.getBoundingClientRect(); // La distancia a la que se encuentra ese elemento

//   console.log(ubicacion);

  if (ubicacion.top < 867) {
    console.log(`Elemento visible`);
  } else {
    console.log(`Aun no es visible`);
  }
});
