//-------------------------------------------CLASE 5 - Manejo de archivos en JavaScript------------------------------------------------------

//* setTimeOut y setIntervals----------------------------------------------

// console.log("Primer log");

// setTimeout(() => {
//   console.log("Set time out");
// }, 4000);

// console.log("Ultimo log");

// setInterval(() => {
//   console.log("Set Interval");
// }, 2000);

//* FILE SYSTEM ----------------------------------------------------------

const fs = require("fs");

//* SINCRONOS----------------------------------------------------

//* escribir archivos----------------------------------------------

fs.writeFileSync("archivo.txt", "primera linea"); //?---> crea un archivo y su contenido y si encuentra, sobreescribe contenido
// fs.appendFileSync("archivo.txt", "segunda linea"); //!---> no lo vamos a utilizar en el curso pero en esta caso no sobreescribe

//* leer un archivo------------------------------------------------
const infoArchivo = fs.readFileSync("archivo.txt", "utf-8");
console.log(infoArchivo);

//* eliminar un archivo--------------------------------------------
fs.unlinkSync("archivo.txt");

//* existe un archivo----------------------------------------------
console.log(fs.existsSync("archivo.txt")); //?---> este metodo es unicamente sincrono

//* ASINCRONOS-----------------------------------------------------------

//? ---> en este caso el callback en vez de 2 parametros solo necesita el de error (sin necesidad del parametro si se resuelve):
//* escribir archivos----------------------------------------------
fs.writeFile("archivo2.txt", "primera linea asincrona", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Archivo creado con exito");
  }
});

//* leer un archivo------------------------------------------------
fs.readFile("archivo2.txt", "utf-8", (error, info) => {
  if (error) {
    console.log("prueba error:", error);
  } else {
    console.log(info);
  }
});

//* eliminar un archivo--------------------------------------------
fs.unlink("archivo2.txt", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Archivo eliminado correctamente");
  }
});

//* PROMESAS----------------------------------------

// fs.promises
//   .writeFile("archivoPromesas.txt", "Primer linea Promesas")
//   .then(() => {
//     console.log("Archivo creado con exito");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fs.promises
//   .readFile("archivoPromesas.txt", "utf-8")
//   .then((info) => {
//     console.log(info);
//   })
//   .catch((error) => {
//     console.log("Prueba error", error);
//   });

// fs.promises
//   .unlink("archivoPromesas.txt")
//   .then(() => console.log("Archivo promesa borrado con exito")) //se pueda hacer sin llave si es una linea
//   .catch((error) => console.log(error));

// const productos = [
//   {
//     nombre: "iPhone",
//     precio: 500,
//     stock: 40,
//   },
//   {
//     nombre: "iPad",
//     precio: 200,
//     stock: 20,
//   },
//   {
//     nombre: "TV",
//     precio: 800,
//     stock: 10,
//   },
//   {
//     nombre: "Computadora",
//     precio: 1200,
//     stock: 40,
//   },
// ];

// // JSON.stringify() -> pasa de objeto a texto plano Json
// // JSON.parse() -> pasa de texto plano Json a objeto

// fs.promises
//   .writeFile("archivoPromesas.json", JSON.stringify(productos))
//   .then(() => {
//     console.log("Productos guardados con exito");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fs.promises
//   .readFile("archivoPromesas.json", "utf-8")
//   .then((info) => {
//     console.log(info);
//     console.log(JSON.parse(info));
//   })
//   .catch((error) => {
//     console.log("Prueba error", error);
//   });

// //HAY ACTIVIDAD(indexHandsOn en clase 5)
