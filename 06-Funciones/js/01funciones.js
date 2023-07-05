// Funciones en JS

// Declaracion de funcion: Puede ser llamada antes de la funcion 
function sumar() {
  console.log(2 + 2);
}

sumar();

// Expresion de funcion: No se puede llamar antes de la funcion
const sumar2 = function () {
  console.log(3 + 3);
};

sumar2();

