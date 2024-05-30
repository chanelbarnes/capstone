const User = require('../models/user');

//Get all users (GET)
const fetchAllUsers = async (req,res) => {
    const users = await User.find();
    console.log(users)
    res.json({users})
}

//Get specific user by ID (GET)

const fetchUser = async (req, res) => {
    const userID = req.params.user.id 
    const user = await User.findById(userId)
    res.json({user})
}

//Create user (POST)
const createUser = async (req,res) => {
    console.log(`BODY ${req.body}`)

    const {username, email, password} =req.body

    const User = await User.create({
        username: username,
        email: email,
        password: password
    })
    res.json({user})
}

//Update user (PUT)
const updateUser = async (req,res) => {
    const userId = req.params.id
    const {username, email, password} = req.body
    const updatedUser = await User.findByIdAndUpdate(userId, {
        username: username,
        email: email,
        password: password,
    })
    res.json({updatedUser})
}

//Delete user (DELETE)
const deleteUser = async (req, res) => {
    const userId = req.params.id 
    const deletedUser = await User.findByIdAndDelete(userId)
    res.json({message: `${userId} account deleted`})
}

module.exports = {
    fetchAllUsers,
    fetchUser,
    createUser,
    updateUser,
    deleteUser
}