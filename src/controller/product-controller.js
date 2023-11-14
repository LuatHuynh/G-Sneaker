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
          message: "Product's id doesn't exist or invalid!",
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
}

module.exports = ProductController;
