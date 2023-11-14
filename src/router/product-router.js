const express = require("express");
const route = express.Router();
const ProductController = require("../controller/product-controller");

const productController = new ProductController();

route.get("/", productController.getAllProducts);
route.get("/:id", productController.getProductById);
route.post("/", productController.createProduct);
route.put("/:id", productController.updateProduct);
route.delete("/:id", productController.deleteProductById);

module.exports = route;
