import express from "express";
import usersRouter from "./routes/users.router.js";
import productsRouter from "./routes/products.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// public
// app.use(express.static());
// routes
app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);

app.listen(8080, () => {
  console.log("Escuchando al puerto 8080");
});
