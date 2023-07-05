// Funciones con parametros y argumentos
let valor1 = 10;
let valor2 = 20;

// Funcion que retorna valores
function sumar(valor1Pa, valor2Pa) {
  console.log(valor1Pa + valor2Pa);
}

sumar(valor1, valor2);

// Funciones con parametros por default
function saludar(nombre = "Juan", apellido = "Hernandez") {
  console.log(`Hola ${nombre} ${apellido}`);
}

saludar();
