const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    // 1. Try to read the file synchronously first
    let messages = 'No messages yet.';
    try {
      // This will read the file and store it in the variable
      messages = fs.readFileSync('message.txt', 'utf8');
    } catch (err) {
      // If the file doesn't exist yet, it just keeps the default 'No messages yet.' text
    }

    // 2. Display the HTML with the message variable injected
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body>');
    res.write(`<h2>Last Message Received: <span style="color: blue;">${messages}</span></h2>`);
    res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      // Extract the message and replace any '+' symbols with spaces
      const message = parsedBody.split('=')[1].replace(/\+/g, ' ');
      
      // 3. Write to the file synchronously so it finishes BEFORE the redirect happens
      fs.writeFileSync('message.txt', message);
      
      // 4. Redirect back to the home page
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html><body><h2>Page Not Found</h2></body></html>');
  res.end();
};

module.exports = requestHandler;