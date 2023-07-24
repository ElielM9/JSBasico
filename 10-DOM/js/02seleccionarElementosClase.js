// Seleccionar elementos por medio de su clase
const header = document.getElementsByClassName(`header`);
console.log(header);

const hero = document.getElementsByClassName(`hero`);
console.log(hero);

// Si las clases existen mas de una vez, selecciona todos esos elementos
const contenedor = document.getElementsByClassName(`contenedor`);
console.log(contenedor);

// Si la clase no existe retorna un HTMLColection vacio 
const noExiste = document.getElementsByClassName(`noExiste`)
console.log(noExiste);