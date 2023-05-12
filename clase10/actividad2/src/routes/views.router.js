import { Router } from "express";
import { UserManager } from "../UsersManager.js";
import { __dirname } from "../utils.js";

const router = Router();
const userManager = new UserManager(__dirname + "/Users.json");

//*Observar los diferentes resultados en el navegador.
router.get("/", (req, res) => {
  res.render("register");
});
//http://localhost:8080/views

router.get("/registerList", async (req, res) => {
  const users = await userManager.findUsers();
  res.render("registerList", { users });
});
//http://localhost:8080/views/registerList
//*Confirmar que el guardado se realice exitosamente.

export default router;
