const express = require('express');
const app = express();

// 1. Import the router file
const shopRoutes = require('./shopRoutes');

// 2. Use app.use() to connect the router
// Note: We are adding a '/shop' prefix, so the routes will be /shop/products and /shop/add-product
app.use('/shop', shopRoutes);

// Catch-all 404 route for any undefined endpoints
app.use((req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});