// const http = require("http"); //? forma 1 de requerir
import http from "http"; //? forma 2 de requerir, se debe agregar en el package.json:"type": "module"

//* creamos servidor
const server = http.createServer((req, res) => {
  console.log(req);
  res.end("Mi primer hola mundo desde Backend");
});

server.listen(8080, () => {
  console.log("Escuchando al puerto 8080");
});
