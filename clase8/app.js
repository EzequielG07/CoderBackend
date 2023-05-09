import express from "express";
import ProductManager from "./ProductManager.js";

const app = express();
const productManager = new ProductManager("./products.json");

// express.json() SIEMPRE!!!
// express.urlencoded() SIEMPRE!!! PARA QUE EL SERVIDOR ENTIENDA LA INFO QUE SE ENVIA
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/products", async (req, res) => {
  const products = await productManager.getProducts();

  res.json({ products });
});

app.get("/products/:idProd", async (req, res) => {
  const { idProd } = req.params; //? {idProd} es para descructuring
  const product = await productManager.getProductById(+idProd);
  res.json({ product });
});

app.post("/products", async (req, res) => {
  const obj = req.body;
  // console.log("informacion de producto:", obj);
  const newProduct = await productManager.createProduct(obj);
  res.json({ message: "Product created", product: newProduct });
});

app.delete("/products", async (req, res) => {
  const message = await productManager.deleteProducts();
  res.json({ message });
});

app.delete("/products/:idProd", async (req, res) => {
  const { idProd } = req.params;
  const message = await productManager.deleteProductById(+idProd);
  res.json({ message });
});

app.put("/products/:idProd", async (req, res) => {
  const { idProd } = req.params;
  const obj = req.body;
  const product = await productManager.updateProduct(+idProd, obj);
  res.json({ product });
});

app.listen(8080, () => {
  console.log("escuchando al puerto 8080");
});
