// Seleccionar elementos con su ID, no debe haber más de un elemento, si hay mas de uno, va a retornar el primero que encuentre
const form = document.getElementById(`formulario`);
console.log(form);

// Seleccionar un elemento que no existe
const noExiste = document.getElementById(`noExiste`);
console.log(noExiste); // Retorna un null
