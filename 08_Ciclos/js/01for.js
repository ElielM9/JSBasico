// For en JS

for (i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(`Par: ${i}`);
  } else {
    console.log(`Impar: ${i}`);
  }
}

// Iterar arrays
let carrito = [
  { nombre: "Monitor 24 Pulgadas", precio: 259 },
  { nombre: "Monitor 27 Pulgadas", precio: 359 },
  { nombre: "Monitor 25 Pulgadas", precio: 339 },
  { nombre: "Monitor 21 Pulgadas", precio: 159 },
];

for (i = 0; i < carrito.length; i++) {
  console.log(`Producto: ${carrito[i].nombre}`);
}

// Break y Continue
for (i = 0; i <= 10; i++) {
  if (i === 5) {
    console.log(`Numero 5`);
    break; // Termina todo el ciclo
    // continue; // Corta la siguiente linea
  }
  console.log(i);
}

// Fizz Buzz
// Multiplo de 3: Fizz - Multiplo de 5: Buzz - Multiplo de ambos: Fizz Buzz
for (i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`Fizz Buzz ${i}`);
  } else if (i % 3 == 0) {
    console.log(`Fizz: ${i}`);
  } else if (i % 5 == 0) {
    console.log(`Buzz ${i}`);
  }
}
