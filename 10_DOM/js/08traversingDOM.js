// Traversing the DOM: Es la forma en la que vamos recorriendo el DOM por los diferentes elementos como si fuera un mapa.
const nav = document.querySelector(`.nav`);
console.log(nav);
console.log(nav.firstElementChild); // Retorna el primer elemento
console.log(nav.lastElementChild); // Retorna el ultimo elemento

console.log(nav.childNodes); // Trae los elementos, los espacios en blanco se consideran elementos.
console.log(nav.children); // lista unicamente elementos reales (Codigo html)

console.log(nav.children[0].nodeName);
console.log(nav.children[0].nodeType);

// Seleccionar card con traversing
const card = document.querySelector(`.card`);
console.log(card.children); // Recorrer a traves de los hijos

console.log(card.children[1].children[1].textContent = "Nuevo heading");

// Seleccionar imagen con traversing
card.children[0].src = "img/hacer3.jpg";


// Traversing de hijo a padre 
console.log(card.parentElement); // Recorres a traves del elemento padre


// Seleccionar el siguiente elemento (o elemento hermano)
console.log(card.nextElementSibling); // Recorre a traves del siguiente elemento


const ultimoCard = document.querySelector(`.card:nth-child(4)`);
console.log(ultimoCard.previousElementSibling); // Recorre a el elemento anterior