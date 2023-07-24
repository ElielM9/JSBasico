// Seleccionar elementos con queryselector
const card = document.querySelector(`.card`); // Selecciona el primer elemento que encuentre con la clase.
console.log(card);

// Selectores especificos como en CSS
const info = document.querySelector(`.premium .info`);
console.log(info);

// Seleccionar el segundo card
const card2 = document.querySelector(`section.hospedaje .card:nth-child(2)`);
console.log(card2);


// Seleccionar por medio de ID
const form = document.querySelector(`#formulario`) // Selecciona el primer elemento que encuentre con el ID

// Seleccionar elementos html
const nav = document.querySelector(`nav`); 
console.log(nav);