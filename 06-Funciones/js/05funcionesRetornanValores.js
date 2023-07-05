// Funciones que retoman valores
let total = 0;
let precio = 300; 

function agregarCarrito(precioPa) {
  return (total += precioPa);
}

function calcularImpuesto(totalPa) {
  return totalPa * 1.15;
}


total = agregarCarrito(precio);

const totalPagar = calcularImpuesto(total);

console.log(`El total es: ${totalPagar}`);