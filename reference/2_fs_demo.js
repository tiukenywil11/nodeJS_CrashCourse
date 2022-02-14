const fs = require('fs');
const path = require('path');

// Create folder, asynchronous takes 3 parameters (directory, options, and callback)

// Standard instantiation
//console.log("Creating folder test...")
//fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {
//    if(err) throw err;
//    console.log('Folder created...');
//});

// Using arrow function
console.log("Creating folder test...")
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if(err) throw err;
    console.log('Folder created...');
});

// Write to a file: asynchronous, takes 3 parameters (directory to file name, content to be written, callback function)
// Using writeFile overwrites the file contents
console.log("Writing to file hello.txt...")
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
    if(err) throw err;
    console.log('File hello.txt is written to...');
});

// Append to a file: asynchronous, takes 3 parameters (directory to file name, content to be appended, callback function)
// Using appendFile adds to the file contents
console.log("Writing to file hello.txt...")
fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love node.js', err => {
    if(err) throw err;
    console.log('File hello.txt is appended to...');
});

// Read file: asynchronous, takes 3 parameters (directory to file name, character encoding (utf8), callback function)
// Second parameter "data" is where read data resides
console.log("Reading file hello.txt...")
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log('Reading hello.txt...');
    console.log(data);
});

// Rename file: asynchronous, takes 3 parameters (directory to file name, directory to renamed file name, callback function)
console.log("Renaming file hello.txt...")
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), err => {
    if(err) throw err;
    console.log('File hello.txt renamed to helloworld.txt...');
});
