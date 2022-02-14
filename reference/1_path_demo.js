const path = require('path');

// Display base path
console.log('Display base path:');
console.log(__filename);

// Display base file name
console.log('Display base file name:');
console.log(path.basename(__filename));

// Display directory name
console.log('Display directory name:');
console.log(path.dirname(__filename));

// Display file extension
console.log('Display file extension:');
console.log(path.extname(__filename));

// Create path object
console.log('Creating a path object');
console.log(path.parse(__filename).base);

// Concatenate paths: Helpful for standardizing delimiters of paths (e.g. "/","\", etc.)
console.log('Concatenating a path');
console.log(path.join(__dirname, 'test', 'hello.html'));