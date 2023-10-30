// Eliminar elementos de LocalStorage
localStorage.removeItem(`Nombre`);

// Actualizar un registro
const meses = [`Enero`];
localStorage.setItem(`Meses`, JSON.stringify(meses));

const mesesArray = JSON.parse(localStorage.getItem(`Meses`));

console.log(mesesArray);
mesesArray.push(`Febrero`);
console.log(mesesArray);

localStorage.setItem(`Meses`, JSON.stringify(mesesArray));


// Elimina todo del localstorage
localStorage.clear()