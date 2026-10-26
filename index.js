const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        // Read the existing messages from the file
        fs.readFile('message.txt', 'utf8', (err, data) => {
            const messages = data ? data : 'No messages yet.';
            
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title>Enter Message</title></head>');
            res.write('<body>');
            // Show messages at the top of the form
            res.write(`<h2>Messages:</h2><p>${messages}</p>`);
            res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
            res.write('</body>');
            res.write('</html>');
            return res.end();
        });
    } else if (url === '/message' && method === 'POST') {
        const body = [];
        
        // Listen for data chunks (Stream)
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        // When stream ends, process the buffer
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            // Assuming the input is named 'message' as per instructions
            const message = parsedBody.split('=')[1];
            
            // Append the new message to the file with a space or newline
            fs.appendFileSync('message.txt', message + " ");
            
            // Redirect back to home with 302 status
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><body><h2>Page Not Found</h2></body></html>');
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});