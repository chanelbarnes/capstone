const mongoose = require("mongoose")

const productsSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true }
});

const Products = mongoose.model("product", productsSchema);
module.exports = Products;