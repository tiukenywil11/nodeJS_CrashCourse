const EventEmitter = require('events');

// Create an EventEmitter class
class MyEmitter extends EventEmitter {}

// Initialize an EventEmitter object
const myEmitter = new MyEmitter();

// Creating an event listener, two parameter (event name, callback function)
console.log('Creating an event emitter with name "event"');
myEmitter.on('event', () => console.log('Event Fired!'));

// Call an event, with parameter event name of emitter
console.log('Calling event emitter with name "event": ');
myEmitter.emit('event');
