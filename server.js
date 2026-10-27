const express = require('express');

const app = express();

// 1. Custom Logging Middleware
// This runs for every incoming request before hitting the routes
app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next(); // Pass control to the next middleware or route handler
});

// 2. GET /products
app.get('/products', (req, res) => {
    res.send('Here is the list of all products.');
});

// 3. POST /products
app.post('/products', (req, res) => {
    res.send('A new product has been added.');
});

// 4. GET /categories
app.get('/categories', (req, res) => {
    res.send('Here is the list of all categories.');
});

// 5. POST /categories
app.post('/categories', (req, res) => {
    res.send('A new category has been created.');
});

// Start the server and listen on port 4000
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});