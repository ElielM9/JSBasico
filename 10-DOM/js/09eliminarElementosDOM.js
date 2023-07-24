// Eliminar elementos del DOM
const primerEnlace = document.querySelector(`a`);
console.log(primerEnlace);

// Eliminar elemento por si mismo
primerEnlace.remove();

// Eliminar elementos por medio de su elemento padre
const nav = document.querySelector(`.nav`);
console.log(nav.children);

nav.removeChild(nav.children[2]); // Se le pasa la referencia del elemento que queremos eliminar. 

