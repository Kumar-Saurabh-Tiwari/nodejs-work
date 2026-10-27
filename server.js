const express = require('express');

const app = express();

// Set up a dynamic GET route with a route parameter (:username)
app.get('/welcome/:username', (req, res) => {
    // 1. Extract the route parameter
    const username = req.params.username;
    
    // 2. Extract the query parameter
    const role = req.query.role;
    
    // 3. Send the personalized response
    if (role) {
        res.send(`Welcome ${username}, your role is ${role}`);
    } else {
        res.send(`Welcome ${username}`);
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});