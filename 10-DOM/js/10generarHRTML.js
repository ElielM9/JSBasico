// Generar HTML con JS
const enlace = document.createElement(`a`); // Crear el elemento
enlace.textContent = "Hola"; // Agregando texto
enlace.href = `./nuevo-enlace`; // Agregar href
enlace.target = `_blank`;

console.log(enlace);

enlace.onclick = funcion;

// Mostrar el elemento en el HTML
const nav = document.querySelector(`.nav`);
nav.appendChild(enlace); // Inserta el elemento al final
nav.insertBefore(enlace, nav.children[0]); // Inserta el elemento donde tú le indiques, recibe el elemento y la posicion en la que lo quieres colocar

function funcion() {
  alert(`click`);
}

// Crear un card de forma dinamica
// Crear los parrafos
const parrafo1 = document.createElement(`p`);
parrafo1.textContent = `Concierto`;
parrafo1.classList.add(`categoria`, `concierto`);

const parrafo2 = document.createElement(`p`);
parrafo2.textContent = `Concierto Rock`;
parrafo2.classList.add(`titulo`);

const parrafo3 = document.createElement(`p`);
parrafo3.textContent = `$800 Persona`;
parrafo3.classList.add(`precio`);

// Crear info
const info = document.createElement(`div`);
info.classList.add(`info`);
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

console.log(info);

// Crear la imagen
const img = document.createElement(`img`);
img.src = `img/hacer2.jpg`;
img.classList.add(`img-fluid`);

// Crear card
const card = document.createElement(`div`);
card.classList.add(`card`);
card.appendChild(img);
card.appendChild(info);
console.log(card);

// Insertar en el HTML
const contenedor = document.querySelector(`.hacer .contenedor-cards`);
contenedor.appendChild(card);
