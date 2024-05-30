require("dotenv").config()
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000
const connectToDb = require('./config/connectToDb.js')

const cors = require('cors')

app.use(express.json())
app.use(cors())

connectToDb()
// const User = require("./models/user")

app.get("/", (req,res)=>{
    res.send("This is a landing page.")
})


//Import routes
const userRoutes = require('./routes/user');
const productsRoutes = require('./routes/products');
// const ordersRoutes = require('./routes/orders');

// Use routes 
app.use('/users', userRoutes);
app.use('/products', productsRoutes);
// app.use('/orders', ordersRoutes);





app.listen(PORT, () => {
    console.log(`Express Server Listing on port num ${PORT}`)
})