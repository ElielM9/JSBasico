// Event bubbling: Cuando presionas en un evento pero este se propaga por distintos lugares, dando resultados inesperados.
const cardDiv = document.querySelector(`.card`);
const infoDiv = document.querySelector(`.info`);
const tituloDiv = document.querySelector(`.titulo`);

cardDiv.addEventListener(`click`, (e) => {
  e.stopPropagation; // Detiene la propagacion del event s

  console.log(`Click card`);
});

infoDiv.addEventListener(`click`, (e) => {
  e.stopPropagation;

  console.log(`Click info`);
});

tituloDiv.addEventListener(`click`, (e) => {
  e.stopPropagation;
  console.log(`Click en el titulo`);
});
