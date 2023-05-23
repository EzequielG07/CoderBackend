// const http = require("http"); //? forma 1 de requerir
import http from "http"; //? forma 2 de requerir, se debe agregar en el package.json:"type": "module"

//* creamos servidor
const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      res.end("Mi primer hola http mundo desde Backend");
    } else if (req.url === "/productos") {
      res.end("Hola productos http");
    } else if (req.url === "/usuarios") {
      res.end("Hola usuarios http");
    }
  }

  console.log(req);
});

server.listen(8080, () => {
  console.log("Escuchando al puerto 8080");
});
