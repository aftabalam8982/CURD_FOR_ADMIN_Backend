const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "please enter the product name"],
    },
    quantity: {
      type: Number,
      require: true,
      minimum: 0,
    },
    price: {
      type: Number,
      require: true,
      minimum: 0,
    },
    image: {
      type: String,
      require: false,
    },
  },
  { timeStamp: true }
);

const ProductModel = mongoose.model("Product", ProductSchema);
module.exports = ProductModel;
