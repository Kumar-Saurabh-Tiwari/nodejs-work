const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse JSON bodies sent by Axios
app.use(express.json()); 

// Serve the HTML form
app.get('/api/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'products.html'));
});

// Handle the POST request from Axios
app.post('/api/products', (req, res) => {
    const newProduct = req.body.productName;
    
    // Console log the data on the server (Deliverable 4)
    console.log("Product received on server:", newProduct);
    
    // Return the user-added product as a response (Deliverable 4)
    res.send(`Successfully added product: ${newProduct}`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});