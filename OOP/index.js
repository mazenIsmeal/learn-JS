/*__________________OOP_________________ */

class User {
    constructor(id, name, salary) {
        // property
        this.i = id;
        this.n = name || 'Unknown';
        this.s = salary < 6000 ? salary + 1000 : salary;
        this.msg = function() {
            return `Hello my name is ${this.n} and my salary is ${this.s}`
        }
    }
    // method
    writeMsg() {
        return `Hello my name is ${this.n} and my salary is ${this.s}`
    }
}

let userOne = new User(100, 'mazen', 8000);
let userTwo = new User(100, '', 5000);
console.log(userOne);
console.log(userTwo.msg());
console.log(userTwo.writeMsg());




// console.log(userOne instanceof User); // معناها اني userone تباع class user
// console.log(userOne.constructor === User)