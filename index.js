console.log('Hello from NodeJS');

// Import object from person.js
const person = require('./person');
console.log(person)

// Create a new instance of 'Person' class
const person1 = new person('John Doe', 30);
person1.greeting();