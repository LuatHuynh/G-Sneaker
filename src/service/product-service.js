const productRepository = require("../repository/product-repos");
const { NOT_FOUND } = require("../config/constant");

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
      if (!product) {
        throw new Error("Product's id does not exist", {
          cause: NOT_FOUND,
        });
      }
      return product;
    } catch (error) {
      throw error;
    }
  },
  createProduct: async (product) => {
    try {
      const lastProduct = await productRepository.lastedProduct();
      const newId = Math.floor(lastProduct.id) + 1;
      const newProduct = {
        ...product,
        id: newId,
      };
      const createdProduct = await productRepository.createProduct(newProduct);
      return createdProduct;
    } catch (error) {
      throw error;
    }
  },
  updateProduct: async (product, id) => {
    try {
      const oldProduct = await productRepository.getProductByID(id);
      if (!oldProduct) {
        throw new Error("Product's id does not exist", {
          cause: NOT_FOUND,
        });
      }
      await productRepository.updateProduct(product, id);
    } catch (error) {
      throw error;
    }
  },
  deleteProductByID: async (id) => {
    try {
      const product = await productRepository.getProductByID(id);
      if (!product) {
        throw new Error("Product's id does not exist", {
          cause: NOT_FOUND,
        });
      }
      await productRepository.deleteProductByID(id);
    } catch (error) {
      throw error;
    }
  },
};

module.exports = productService;
