exports.get404 = (req, res, next) => {
    // Centralized 404 error response
    res.status(404).send('<h1>404 - Page Not Found</h1>');
};