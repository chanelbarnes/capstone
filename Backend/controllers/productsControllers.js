const Product = require('../models/products');
const User = require('../models/user');

//Get all products (GET)
const fetchAllProducts = async (req, res) => {
    const products = await Product.find()
    res.json({products})
}

//Get specific product (GET)
const fetchProduct = async (req, res) => {
    const productId = req.params.id
    const product = await Product.findById(productId)
    res.json({product})
}

//Create a product (POST)
const createProduct = async (req, res) => {
    console.log(`BODY: ${req.body}`)

    const userId = req.params.user.id
    const user = await User.findById(userId)

    const {name, price, description, quantity} = req.body

    const product = await Product.create({
        user: userId,
        name,
        price,
        description,
        quantity,
    })
    res.json({product})
}

//Update a product (PUT)
const updateProduct = async (req, res) => {
    const {userId, productId} = req.params
    const {name, price, description, quantity} = req.body

    //Check if user and product exist
    const user = await User.findById(userId)
        if(!user) {
            res.json({message: `User "${user}" not found`})
        }
    
    const product = await Product.findById(productId)
        if(!product) {
            res.json({message: `${product} not found`})
        }

    const updatedProduct = await Product.findByIdAndUpdate(productId, {
        name:name,
        price:price,
        description:description,
        quantity:quantity,
})
    res.json({updatedProduct})
}

//Delete product (DELETE)
const deleteProduct = async (req, res) => {
    const {userId, productId} = req.params

    //Check if user and product exist
    const user = await User.findById(userId)
        if(!user) {
            res.json({message: `User "${user}" not found`})
        }
    
    const product = await Product.findById(productId)
        if(!product) {
            res.json({message: `${product} not found`})
        }

    const deletedProduct = await Product.findByIdAndDelete(productId)
        res.json({message: `${product} has been deleted`})
}

module.exports = {
    fetchAllProducts,
    fetchProduct,
    createProduct,
    updateProduct,
    deleteProduct
}
