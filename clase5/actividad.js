const moment = require("moment");

const fechaActual = moment();
const fechaNacimiento = moment("1992 0108", "YYYYMMDD");

if (fechaNacimiento.isValid()) {
  console.log(fechaActual.diff(fechaNacimiento, "years"));
} else {
  console.log("No es valida");
}
console.log(fechaActual, fechaNacimiento);
