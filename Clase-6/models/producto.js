//Schema del producto
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  precio: {
    type: Number,
    required: true,
    min: 0,
  },
  descripcion: {
    type: String,
    require: true,
    trim: true,
  },
});

const Product = mongoose.model("Producto", productSchema);

module.exports = Product;
