const express = require('express');

const app = express();

// 1. Create a Custom Middleware Function
const addUserMiddleware = (req, res, next) => {
    // Add a req.user property with a value of "Guest"
    req.user = "Guest";
    // Call next() to pass control to the next middleware/route handler
    next(); 
};

// 2. Set Up Routing for the Middleware
// Apply the middleware specifically to the '/welcome' route
app.get('/welcome', addUserMiddleware, (req, res) => {
    // Respond with an h1 heading that includes the req.user value
    res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});