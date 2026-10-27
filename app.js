const express = require('express');
const path = require('path'); // Required to construct the file path
const app = express();

// GET endpoint to serve the HTML file
app.get('/api/products', (req, res) => {
    // path.join combines the current directory name, the VIEW folder, and the file name
    res.sendFile(path.join(__dirname, 'view', 'products.html'));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});