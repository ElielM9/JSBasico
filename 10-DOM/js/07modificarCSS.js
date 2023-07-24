// Modificar el CSS con JS
const encabezado = document.querySelector(`h1`);
console.log(encabezado);

// Se puede modificar el CSS de esta manera pero es más recomendable agregar o eliminar clases
encabezado.style.backgroundColor = "Red";
encabezado.style.fontFamily = "Arial";
encabezado.style.textTransform = "Uppercase";

// Eliminar o agregar clases
const card = document.querySelector(`.card`);
console.log(card.classList); // ClassList trae las clases como un array

card.classList.add(`nueva-clase`, `segunda-clase`); // Añadir una clase
card.classList.remove(`card`); // Elimina una clase
