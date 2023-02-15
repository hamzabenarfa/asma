const mongoose = require("mongoose");

const ProduitScema = new mongoose.Schema(
  {
    nom: { type: String, required: true },
    prix: { type: Number, required: false },
    description: { type: String, required: false },
    stock: { type: Number, required: false },
    username: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Produit", ProduitScema);
