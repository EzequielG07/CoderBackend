//para vistas de la actividad 1 y 2
import { Router } from "express";
import { UserManager } from "../UsersManager.js"; //2
import { __dirname } from "../utils.js"; //2

const router = Router();
const userManager = new UserManager(__dirname + "/Users.json"); //2
//1-
// const users = [
//   {
//     nombre: "Pablo",
//     apellido: "Militello",
//     edad: 40,
//     correo: "pmilitello@mail.com",
//     telefono: 3456789,
//   },
//   {
//     nombre: "Leandro",
//     apellido: "Lucci",
//     edad: 35,
//     correo: "llucci@mail.com",
//     telefono: 3456789,
//   },
//   {
//     nombre: "Carlos",
//     apellido: "Hermida",
//     edad: 40,
//     correo: "chermida@mail.com",
//     telefono: 3456789,
//   },
//   {
//     nombre: "Caro",
//     apellido: "Dominguez",
//     edad: 40,
//     correo: "cdominguez@mail.com",
//     telefono: 3456789,
//   },
//   {
//     nombre: "Edgardo",
//     apellido: "Aranda",
//     edad: 40,
//     correo: "earanda@mail.com",
//     telefono: 3456789,
//   },
// ];

router.get("/", (req, res) => {
  const indice = Math.floor(Math.random() * 5);
  const usuario = users[indice];
  res.render("actividad1", { ...usuario });
});

router.get("/lista", (req, res) => {
  res.render("lista", { users });
});

//*-------------------------------------------------------
router.get("/registro", (req, res) => {
  res.render("registro");
});

router.get("/listaRegistro", async (req, res) => {
  const users = await userManager.findUsers();
  res.render("listaRegistro", { users });
});

export default router;
