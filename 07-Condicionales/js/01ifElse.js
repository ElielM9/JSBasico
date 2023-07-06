// If else en JS
let numero1 = parseInt(prompt("Ingresa un numero"));
let numero2 = parseInt(prompt("Ingresa un segundo valor"));

if (numero1 > numero2) {
  alert(`El numero ${numero1} es mayor`);
} else if (numero1 === numero2) {
  alert(`El numero ${numero1} y ${numero2} son iguales`);
} else {
  alert(`El numero ${numero2} es mayor`);
}


// Operador ternario: Permite simplificar un if else solamente. Se recomienda usar cuando solo sea una linea de código.
let autenticado = true;
let puedePagar = true; 

// Verdadero : Falso
autenticado && puedePagar ? console.log(`Esta autenticado`) : console.log(`No esta autenticado`);

