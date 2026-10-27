const express = require('express');
const router = express.Router();

// Import the product controller
const productController = require('../controllers/productController');

// Route definitions using controller functions
router.get('/', productController.getAllProducts);
router.post('/', productController.addProduct);
router.get('/:id', productController.getProductById);

module.exports = router;