const productRepository = require("../repository/product-repos");

const productService = {
  getAllProducts: async () => {
    try {
      const products = await productRepository.getAllProducts();
      return products;
    } catch (error) {
      throw error;
    }
  },
  getProductByID: async (id) => {
    try {
      const product = await productRepository.getProductByID(id);
      return product;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = productService;
