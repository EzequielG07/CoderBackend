const fs = require("fs");

const date = new Date().toLocaleDateString();

fs.writeFile("archivoDate.txt", date, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Archivo de fecha creado exitosamente");
  }
});

fs.readFile("archivoDate.txt", "utf-8", (error, fecha) => {
  if (error) {
    console.log(error);
  } else {
    console.log(fecha);
  }
});
