const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');



// -----Get ALL users (GET):
router.get("/", userController.fetchAllUsers)

// -----Get specific users by ID (GET):
router.get("/:id", userController.fetchUser)

// -----Create a user (POST):
router.post("/", userController.createUser)

// -----Update a specific user (PUT):
router.put("/:id", userController.updateUser)

// -----Delete a specific user (DELETE):
router.delete("/:id", userController.deleteUser)

module.exports = router 