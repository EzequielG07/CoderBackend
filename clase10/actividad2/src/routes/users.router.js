import { Router } from "express";
import { UserManager } from "../UsersManager.js";
import { __dirname } from "../utils.js";

const router = Router();
const userManager = new UserManager(__dirname + "/Users.json");

//* Enviar los datos a una ruta POST ‘/user’, y guardar el usuario en un arreglo.
router.post("/", async (req, res) => {
  await userManager.createUser(req.body);
  res.send("Usuario creado");
});

router.post("/", async (req, res) => {
  await userManager.createUser(req.body);
  res.redirect("/views/registerList");
});

export default router;
