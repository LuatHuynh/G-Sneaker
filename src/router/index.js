const productRouter = require("./product-router");

module.exports = function (app) {
  app.use("/api/v1/products", productRouter);
};
