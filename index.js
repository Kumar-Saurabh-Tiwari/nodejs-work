const express = require('express');

const app = express();

// 1. Create a Custom Middleware Function
const addUserMiddleware = (req, res, next) => {
    req.user = "Guest";
    next(); 
};

// 2. Set Up Routing for the Middleware
// Apply the middleware specifically to the '/welcome' route
app.get('/welcome', addUserMiddleware, (req, res) => {
    res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

// Added a default home route so localhost:3000 doesn't show an error
app.get('/', (req, res) => {
    res.send('<h1>Home Page! Go to <a href="/welcome">/welcome</a> to see the middleware in action.</h1>');
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});