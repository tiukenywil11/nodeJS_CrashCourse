const http = require('http');
const path = require('path');
const fs = require('fs');

console.log('Creating a server...')
const server = http.createServer((req, res) => {
    // req.url gets the url of the browser
    console.log(req.url);

    // Dynamic variables for routing
    // Build file path: If request url is '/' then use the file 'index.html'
    let filePath = path.join(
        __dirname,
        'public', 
        req.url === '/' ? 'index.html' : req.url 
    );

    // Check if file path is correct
    console.log(filePath);

    // Dynamic extension of file
    let extname = path.extname(filePath);

    // Initial content type
    let contentType = 'text/html';

    // Check extension type, then set content type accordingly
    switch(extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'text/png';
            break;
        case '.jpg':
            contentType = 'text/jpg';
            break;
    }

    // Read file
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code = 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), 
                (err, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8');
                })
            } else {
                // Some other server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // Success
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content,'utf8')
        }
    });


    /*
    -- Static variables for routing   
    if (req.url === '/') {

        -- Gets file index.html from directory public, then displays it's content
        fs.readFile(
            path.join(__dirname, 'public', 'index.html'), 
            (err, content) => {
                if (err) throw err;
            
                -- Writes to the headers, takes 2 parameters (Status code, Header variables (e.g. Content-Type)
                res.writeHead(200, { 'Content-Type': 'text/html' });

                -- Displays content from ./public/index.html
                res.end(content);
            }
        );
    }

    if (req.url === '/about') {

        -- Gets file about.html from directory public, then displays it's content
        fs.readFile(
            path.join(__dirname, 'public', 'about.html'), 
            (err, content) => {
                if (err) throw err;
            
                 -- Writes to the headers, takes 2 parameters (Status code, Header variables (e.g. Content-Type)
                res.writeHead(200, { 'Content-Type': 'text/html' });

                -- Displays content from ./public/about.html
                res.end(content);
            }
        );
    }

    -- Example if pointing to an api url
    if (req.url === '/api/users') {

        const users = [
            { name: 'Bob Smith', age: 40},
            { name: 'John Doe', age: 30}
        ];
            
        -- Writes to the headers, takes 2 parameters (Status code, Header variables (e.g. Content-Type)
        res.writeHead(200, {'Content-Type':'application/json'});
        -- Displays JSON data
        res.end(JSON.stringify(users));
    }
    */

    /* 
    -- Add the following to package.json "scripts"
    -- Calling "npm start" would trigger "node index"
    "start": "node index"
    -- Calling "npm dev" would trigger "nodemon index"
    -- nodemon would help sync live changes to codes with the browser
    "dev": "nodemon index"
    */
});

// process.env.PORT: Checks environment variable for PORT, else PORT defaults to 5000
const PORT = process.env.PORT || 5000

// Listen method, has 2 parameters (port, and a callback function)
server.listen( PORT, () => console.log(`Server running on port ${PORT}`))


// console.log('Hello from NodeJS');

/*
-- Import object from person.js
const person = require('./person');

-- This would not work, has not been implemented in nodeJS yet
-- from Person import './person';  

== Transferred to person.js 
console.log('Showing a newly imported class:')
console.log(person)

-- Create a new instance of 'Person' class
const person1 = new person('John Doe', 30);
console.log('Using a function from imported class:')
person1.greeting();
*/

/*
-- Call Logger from logger.js
const Logger = require('./logger');

console.log('Using a function from imported class Logger:')
const logger = new Logger();

== Transferred to logger.js
console.log('Creating an event emitter with name "logger"');
logger.on('message', data => console.log('Called listener:', data));
console.log('Calling event emitter with name "logger": ');
logger.log('Hello World')
*/
