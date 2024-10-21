/*__________________OOP_________________ */

class User {
    #p;
    constructor(id, name, salary, password) {
        // property
        this.i = id;
        this.n = name || 'Unknown';
        this.s = salary < 6000 ? salary + 1000 : salary;
        this.#p = password
        this.msg = function() {
            return `Hello my name is ${this.n} and my salary is ${this.s}`
        }
    }
    // method
    writeMsg() {
        return `Hello my name is ${this.n} and my salary is ${this.s}`
    }
    readPass() {
        return `my PassWord is : ${this.#p}`
    }
}

let userOne = new User(100, 'mazen', 8000, '123456');
let userTwo = new User(100, '', 5000);
console.log(userOne);
console.log(userTwo.msg());
console.log(userTwo.writeMsg());
console.log(userOne.readPass());

class Admin extends User {
    constructor(id, name, salary, eSalary, password) {
        super(id, name, salary, password),
        this.e = eSalary
    }
}

let adminOne = new Admin(101, 'mazen', 15000, 5000, '789456')
console.log(adminOne.e);
console.log(adminOne.msg());
console.log(adminOne.n);
console.log(adminOne.readPass());



// console.log(userOne instanceof User); // معناها اني userone تباع class user
// console.log(userOne.constructor === User)