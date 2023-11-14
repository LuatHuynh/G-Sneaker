const express = require("express");
const route = express.Router();
const ProductController = require("../controller/product-controller");

const productController = new ProductController();

route.get("/", productController.getAllProducts);

module.exports = route;
