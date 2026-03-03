// Modificar texto o imagenes con JS
const encabezado = document.querySelector(`.contenido-hero h1`);
console.log(encabezado);

console.log(encabezado.innerText); // Retorna el texto pero si en el CSS hay visibility hidden no lo va a encontrar.
console.log(encabezado.textContent); // Retorna el texto sin importar nada. 
console.log(encabezado.innerHTML); // Retorna el texto y el HTML.

// Modificar el HTML
const nuevoHead = "Nuevo Head"
document.querySelector(`.contenido-hero h1`).textContent = nuevoHead;

// Modificar una imagen 
const img = document.querySelector(`.card img`)
console.log(img);

img.src = `img/hacer2.jpg`; // Modifica el source de la img