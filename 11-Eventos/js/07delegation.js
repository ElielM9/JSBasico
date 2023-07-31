// Prevenir el Event bubbling con Delegation
const cardDiv = document.querySelector(`.card`);
cardDiv.addEventListener(`click`, (e) => {
  if (e.target.classList.contains(`titulo`)) {
    console.log(`Click en titulo`);
  }
  if (e.target.classList.contains(`info`)) {
    console.log(`Click en info`);
  }
});
