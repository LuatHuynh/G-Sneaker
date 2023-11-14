const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema({
  id: Number,
  image: String,
  name: String,
  description: String,
  price: Number,
  color: String,
});

module.exports = mongoose.model("shoes", Product);
