const express = require('express');

const app = express();

// 1. GET /products
app.get('/products', (req, res) => {
    res.send('Here is the list of all products.');
});

// 2. POST /products
app.post('/products', (req, res) => {
    res.send('A new product has been added.');
});

// 3. GET /categories
app.get('/categories', (req, res) => {
    res.send('Here is the list of all categories.');
});

// 4. POST /categories
app.post('/categories', (req, res) => {
    res.send('A new category has been created.');
});

// 5. Wildcard Route for undefined endpoints (404 Page Not Found)
app.use('*', (req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// Start the server and listen on port 4000
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});