// For of y for in en JS
const pendientes = ["Tarea", "Comer", "Trabajar"];
const automovil = {
  modelo: "Camaro",
  motor: "V8",
  anio: 2015,
};

// For Of: Recorre el arreglo mientras haya elementos en el array.
for (let pendiente of pendientes) {
  console.log(pendiente);
}

// For in: Itera sobre objetos
for (let propiedad in automovil) {
  console.log(automovil[propiedad]);
}

for (let [llave, valor] of Object.entries(automovil)) {
  console.log(`${llave}: ${valor}`);
}
