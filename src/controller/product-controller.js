const { OK, BAD_REQUEST } = require("../config/constant");
const productService = require("../service/product-service");
const isNumeric = require("../helpers/number-check");

class ProductController {
  getAllProducts = async (req, res, next) => {
    try {
      const products = await productService.getAllProducts();
      res.status(OK).json({
        products: products,
      });
    } catch (err) {
      next(err);
    }
  };
  getProductById = async (req, res, next) => {
    try {
      const id = req.params.id;
      if (!isNumeric(id)) {
        res.status(BAD_REQUEST).json({
          message: "Product's id invalid!",
        });
        return;
      }
      const product = await productService.getProductByID(id);
      res.status(OK).json({
        product: product,
      });
    } catch (err) {
      next(err);
    }
  };
  createProduct = async (req, res, next) => {
    try {
      const body = req.body;
      const product = {
        image: body.image || "",
        name: body.name || "",
        description: body.description || "",
        price: body.price || "",
        color: body.color || "",
      };
      if (!isNumeric(product.price)) {
        res.status(BAD_REQUEST).json({
          message: "Product's price must be a number!",
        });
        return;
      }
      const createdProduct = await productService.createProduct(product);
      res.status(OK).json({
        createdProduct: createdProduct,
      });
    } catch (err) {
      next(err);
    }
  };
  updateProduct = async (req, res, next) => {
    try {
      const id = req.params.id;
      if (!isNumeric(id)) {
        res.status(BAD_REQUEST).json({
          message: "Product's id invalid!",
        });
        return;
      }
      await productService.updateProduct(req.body, id);
      res.status(OK).json({
        message: "Updating product successfully",
      });
    } catch (err) {
      next(err);
    }
  };
  deleteProductById = async (req, res, next) => {
    try {
      const id = req.params.id;
      if (!isNumeric(id)) {
        res.status(BAD_REQUEST).json({
          message: "Product's id invalid!",
        });
        return;
      }
      await productService.deleteProductByID(id);
      res.status(OK).json({
        message: "Deleting product successfully",
      });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = ProductController;
