const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsControllers');



// -----Get ALL products (GET):
router.get("/", productsController.fetchAllProducts)

// -----Get specific products by ID (GET):
router.get("/:id", productsController.fetchProduct)

// -----Create a product (POST):
router.post("/", productsController.createProduct)

// -----Update a specific product (PUT):
router.put("/:id", productsController.updateProduct)

// -----Delete a specific product (DELETE):
router.delete("/:id", productsController.deleteProduct)

module.exports = router 