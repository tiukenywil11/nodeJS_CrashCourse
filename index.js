console.log('Hello from NodeJS');

// Import object from person.js
const person = require('./person');

// This would not work, has not been implemented in nodeJS yet
// from Person import './person';  

console.log('Showing a newly imported class:')
console.log(person)

// Create a new instance of 'Person' class
const person1 = new person('John Doe', 30);
console.log('Using a function from imported class:')
person1.greeting();