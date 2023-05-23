import { Router } from "express";

const router = Router();

//*Crear un array “users” que cuente con 5 usuarios de tipo objeto, cada uno con los datos mencionados arriba.
const users = [
  {
    nombre: "Pablo",
    apellido: "Militello",
    edad: 40,
    correo: "pmilitello@mail.com",
    telefono: 65498713,
  },
  {
    nombre: "Leandro",
    apellido: "Lucci",
    edad: 35,
    correo: "llucci@mail.com",
    telefono: 1013648,
  },
  {
    nombre: "Carlos",
    apellido: "Hermida",
    edad: 50,
    correo: "chermida@mail.com",
    telefono: 132753129,
  },
  {
    nombre: "Caro",
    apellido: "Dominguez",
    edad: 28,
    correo: "cdominguez@mail.com",
    telefono: 137852,
  },
  {
    nombre: "Edgardo",
    apellido: "Aranda",
    edad: 63,
    correo: "earanda@mail.com",
    telefono: 345367,
  },
];

//*Al llamar al método get ‘/’, generar un número random para elegir a alguno de los usuarios y mostrar el usuario seleccionado al azar en la plantilla.
router.get("/", (req, res) => {
  const indice = Math.floor(Math.random() * 5);
  const usuario = users[indice];
  res.render("datosPersonales", { ...usuario });
});

//*Observar los diferentes resultados en el navegador.
//http://localhost:8080/views

//? ejemplo para ver un listado completo de los usuarios (ir al handlebars)
router.get("/listadoCompleto", (req, res) => {
  res.render("listadoCompleto", { users });
});
//http://localhost:8080/views/listadoCompleto

export default router;
