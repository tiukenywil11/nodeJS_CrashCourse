// Initialize an object
const person = {
    name: 'John Doe',
    age: '30'
}
// export object 'person' to be called other js files
module.exports = person;

// Instantiate a class (ES6)
// class name starts with a capital letter (Best practice)
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }
}
// export class 'Person' to be used by other js files
module.exports = Person;