//* Utilizar la misma estructura mostrada por el profesor, para poder levantar un servidor que utilice handlebars como motor de plantillas.
import express from "express";
import { __dirname } from "./utils.js";
import handlebars from "express-handlebars";
import viewsRouter from "./routes/views.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static(__dirname + "/public"));

//*configuracion motor plantilla HANDLEBARS
app.engine("handlebars", handlebars.engine()); //? solo aqui

app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use("/views", viewsRouter);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT} en act1`);
});
