// Evento Submit
const form = document.querySelector(`#formulario`);

form.addEventListener(`submit`, validarFormulario);

function validarFormulario(e) {
  e.preventDefault(); // Evitar que el navegador haga la accion por defecto.
  
  console.log(e);
}
