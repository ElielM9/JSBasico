// Eventos sobre los inputs
const busqueda = document.querySelector(`.busqueda`);

busqueda.addEventListener(`keydown`, (e) => {
  console.log(e.type);
  e.type; // Sobre el tipo de evento
  e.target; // Sobre que tipo de input estamos trabajando
  e.target.value; // Lo que esta escribiendo el usuario
}); // Se ejecuta cuando presionas una tecla

busqueda.addEventListener(`keyup`, () => {}); // Se ejecuta cuando presionas y sueltas la tecla
busqueda.addEventListener(`blur`, () => {}); // Se ejecuta cuando entras al input y te sales
busqueda.addEventListener(`copy`, () => {
  console.log(`Copiaste el texto`);
}); // Se ejecuta cuando copias el texto del input
busqueda.addEventListener(`paste`, () => {
  console.log(`Pegaste texto`);
}); // Se ejecuta cuando pegas algo al inpudt
busqueda.addEventListener(`cut`, () => {}); // Se ejecuta cuando cortas el texto
busqueda.addEventListener(`input`, () => {}); // Se ejecuta cuando haces cualquiera de los eventos anteriores salvo el blur
