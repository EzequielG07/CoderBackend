import fs from "fs";

export default class ProductManager {
  constructor(path) {
    this.path = path;
  }

  async getProducts() {
    if (fs.existsSync(this.path)) {
      const products = await fs.promises.readFile(this.path, "utf-8");
      return JSON.parse(products);
    } else {
      return [];
    }
  }

  async getProductById(idProd) {
    const productsFile = await this.getProducts();
    const product = productsFile.find((p) => p.id === idProd);
    if (product) {
      return product;
    } else {
      return "Product not found";
    }
  }

  async createProduct(obj) {
    const productFile = await this.getProducts();
    const id = this.#createId(productFile);
    const newProduct = { id, ...obj };
    productFile.push(newProduct);
    await fs.promises.writeFile(this.path, JSON.stringify(productFile));
    return newProduct;
  }

  #createId(products) {
    let id;
    if (products.length === 0) {
      id = 1;
    } else {
      id = products[products.length - 1].id + 1;
    }
    return id;
  }
}
