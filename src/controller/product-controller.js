const { OK } = require("../config/constant");
const productService = require("../service/product-service");

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
}

module.exports = ProductController;
