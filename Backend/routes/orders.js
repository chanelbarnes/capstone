const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersControllers');



// -----Get ALL orders (GET):
// router.get("/", ordersController.fetchAllorders)

// -----Get specific orders by ID (GET):
router.get("/:id", ordersController.fetchOrder)

// -----Create a order (POST):
router.post("/", ordersController.createOrder)

// -----Update a specific order (PUT):
router.put("/:id", ordersController.updateOrder)

// -----Delete a specific order (DELETE):
router.delete("/:id", ordersController.deleteOrder)

module.exports = router 