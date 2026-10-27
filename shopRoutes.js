const express = require('express');

// Create a new router object
const router = express.Router();

// GET request route
router.get('/products', (req, res) => {
    res.send('<h1>Here is the list of products</h1>');
});

// POST request route
router.post('/add-product', (req, res) => {
    res.send('<h1>Product has been added successfully</h1>');
});

// Export the router so it can be used in the main server file
module.exports = router;