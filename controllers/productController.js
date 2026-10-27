// controllers/productController.js
const productService = require('../services/productService');

exports.getAllProducts = (req, res) => {
    const result = productService.getAllProducts();
    res.send(result);
};

exports.addProduct = (req, res) => {
    const result = productService.addProduct();
    res.send(result);
};

exports.getProductById = (req, res) => {
    const result = productService.getProductById(req.params.id);
    res.send(result);
};