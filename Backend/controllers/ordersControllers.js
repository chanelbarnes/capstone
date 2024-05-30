// const Order = require ('..models/order');
// const User = require ('../models/user');
// const Product = require ('../models/products');

// //Get an order(GET)
// const fetchOrder = async (req, res) => {
//     const orderId = req.params

//     //Check if order exist
//     const order = await Order.findById(orderId)
//         if(!order) {
//             res.json({message: `Order: ${order} does not exist`})
//         }
     
//     res.json({order})
// }

// //Create an order (POST)
// // const createOrder = async (req, res) => {
// //     console.log(`Body: ${req.body}`)
// //     const {userId} = req.params
// //     const {products} = req.body

//     // Find user and check if they exist
//     // const userId = req.params.user.id
// //     const user = await User.findById(userId)
// //         if(!user) {
// //             res.json({message: `ERROR user: ${user} does not exist`})
// //         }

// //     //Find products
// //     const product = await Product.findById(productId)
// //         if(!product) {
// //             res.json({message: `${product} not found`})
// //         }

// //     //Calculate Total
// //     // let total = 0
// //     //     for ()
// //     // total = product.price * product.quantity

// //     //creating acutal order
// //     const order = await Order.create({
// //         user: userId,
// //         products: products,
// //         total
// //     })
// //     res.json({order})
// // }

// //Update order (PUT)
// const updateOrder = async (req,res) => {
//     const orderId = req.params.id

//     const {userId, product} = req.body
//     const updatedOrder = await Order.findByIdAndUpdate(orderId, {
//         userId,
//         product
//     })
//         res.json({updatedOrder})
// }

// //Delete order (DELETE)
// const deleteOrder = async (req, res) => {
//     const orderId = req.params.id
//     const deleteOrder = await Order.findByIdAndDelete(orderId)
//         res.json({message: "Order deleted"})
// }

// module.exports = {
//     fetchOrder,
//     createOrder,
//     updateOrder,
//     deleteOrder
// }