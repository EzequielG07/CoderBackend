import express from "express";

const app = express();

app.get("/", (req, res) => {
  //? req.params (: indica que es dinamico) - req.query - req.body
  console.log(req.query); //?--->query
  const { limite, orden } = req.query;
  console.log(limite, orden);
  // console.log(req);
  res.send("Hola con express");
});

app.get("/productos/:id", (req, res) => {
  console.log(req.params); //?-->params
  res.send("Hola productos");
});

app.get("/usuarios", (req, res) => {
  res.send("Hola usuarios");
});

app.listen(8080, () => {
  console.log("Escuchando al puerto 8080");
});
