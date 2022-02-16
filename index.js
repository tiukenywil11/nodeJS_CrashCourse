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