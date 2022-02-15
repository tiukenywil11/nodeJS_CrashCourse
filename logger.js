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

module.exports = Logger