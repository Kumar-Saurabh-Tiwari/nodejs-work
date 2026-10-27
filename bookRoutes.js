const express = require('express');

// Create a new router object
const router = express.Router();

// GET /books
router.get('/books', (req, res) => {
    console.log("Fetching the list of books...");
    res.send('Here is the list of books!');
});

// POST /books
router.post('/books', (req, res) => {
    // req.body will contain the book data sent in the request
    console.log("Book data received:", req.body); 
    res.send('Book has been added!');
});

// Export the router so it can be used in the main server file
module.exports = router;