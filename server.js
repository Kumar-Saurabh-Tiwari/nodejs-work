const express = require('express');
const app = express();

// 1. Import the router file
const bookRoutes = require('./bookRoutes');

// 2. Middleware to parse incoming request bodies (so req.body works in POST)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3. Connect the router
app.use(bookRoutes);

// Catch-all 404 route for undefined endpoints
app.use((req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});