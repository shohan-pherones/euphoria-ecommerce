const mongoose = require("mongoose");

let Product;

if (mongoose.models.Product) {
  Product = mongoose.model("Product");
} else {
  const productSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  });

  Product = mongoose.model("Product", productSchema);
}

module.exports = Product;
