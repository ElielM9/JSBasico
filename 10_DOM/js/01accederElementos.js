// Acceder a elementos del HTML
let elemento;

elemento = document; // Selecciona todo el documento
elemento = document.all; // Selecciona todos los elementos que están en el html
elemento = document.head; // Selecciona la parte superior del documento.
elemento = document.body; // Selecciona todo lo que esta en la etiqueta body.
elemento = document.domain; // Muestrala URL en la que esta cargando el proyecto.
elemento = document.forms; // Muestra cuantos formularios hay en el proyecto.

elemento = document.forms[0]; // Acceder al indice
elemento = document.forms[0].id; // Acceder al id 
elemento = document.forms[0].method; // Acceder al method del formulario
elemento = document.forms[0].classList; // Acceder a las clases 
elemento = document.forms[0].action; // Acceder al action

elemento = document.links; // Muestra todos los links que existen en el proyecto.
elemento = document.links[0];
elemento = document.links[0].className // Retorna la clase que tiene el elemento en forma de string. 

elemento = document.images;
elemento = document.scripts;



console.log(elemento);
