const express = require('express');
const app = express();

// 1. Import route files
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

// 2. Import the centralized error controller
const errorController = require('./controllers/errorController');

// Mount the routers
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

// 3. Centralized Error Handling (Catch-all for undefined routes)
// This replaces the inline (req, res) => {...} function we used previously
app.use(errorController.get404);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});