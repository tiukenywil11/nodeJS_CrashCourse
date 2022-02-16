const EventEmitter = require('events');
// Universally unique identifier
const uuid = require('uuid');

// Create a new class called Logger
class Logger extends EventEmitter {
    log(msg) {
        // Create an event listener named 'message'
        this.emit('message', { id: uuid.v4(), msg });
    }
}

// module.exports = Logger

console.log('Creating an event emitter with name "logger"');
logger.on('message', data => console.log('Called listener:', data));
console.log('Calling event emitter with name "logger": ');
logger.log('Hello World')