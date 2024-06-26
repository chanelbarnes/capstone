const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [
      { product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
        quanity: { type: Number, required: true }}
    ]
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;