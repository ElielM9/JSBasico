// Switch en JS
const METODO_PAGO = "Efectivo";

switch (METODO_PAGO) {
  case "Efectivo":
    console.log(`Pagaste con ${METODO_PAGO}`);
    break;
  case "Tarjeta":
    console.log(`Pagaste con ${METODO_PAGO}`);
    break;
  default:
    console.log(`No soportado`);
}
