const express = require('express');
const path = require('path');

const app = express();

// 1. Add this middleware so Express can read the data coming from the HTML form
app.use(express.urlencoded({ extended: true }));

// GET endpoint to serve the HTML form
app.get('/api/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'VIEW', 'products.html'));
});

// 2. Add the POST endpoint to handle the form submission
app.post('/api/products', (req, res) => {
    // req.body.productName exactly matches the name="productName" in your HTML input
    const newProduct = req.body.productName;
    console.log("New Product Received:", newProduct);
    
    // Send a success message back to the browser
    res.send(`<h1>Successfully added product: ${newProduct}</h1> <br> <a href="/api/products">Go Back</a>`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});