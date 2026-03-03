// Eventos que ocurren con el Mouse
const nav = document.querySelector(`.nav`);

// Registrar un evento
nav.addEventListener(`click`, () => {
  console.log(`Click en nav`);
}); // Se ejecuta el codigo al hacer click

nav.addEventListener(`mouseenter`, () => {
  console.log(`Entrando en la navegacion`);
  nav.style.backgroundColor = "Red";
}); // Se ejecuta el codigo al pasar el mouse por encima

nav.addEventListener(`mouseout`, () => {
  console.log(`Saliendo de la nav`);
  nav.style.backgroundColor = "Transparent";
}); // Se ejecuta cuando sales del elemento

nav.addEventListener(`mousedown`, () => {}); // Es similar al uso de click
nav.addEventListener(`mouseup`, () => {}); // Se ejecuta al dar click y soltar el mouse
nav.addEventListener(`dblclick`, () => {}); // Doble click para que funcione
