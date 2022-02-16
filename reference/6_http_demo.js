const http = require('http');

// Create a server object, has 2 parameters (request, and response)
// Chains with listen method, has 2 parameters (port, and a callback function)
console.log('Creating a web server')
http.createServer((req, res) => {
    // Write a response
    res.write('Hello world!');
    res.end();
}).listen(5000, () => console.log('Server running...'));