// Learn JS

// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// const user = new User('Oleg', 24);
// const userTwo = new User('Alina', 10);
// const userThree = new User('Vlad', 26);
//
// console.log(user.name);
// console.log(user.age)
//
// console.log(userTwo.name);
// console.log(userTwo.age)
//
// console.log(userThree.name);
// console.log(userThree.age)

//
// const sum = {};
//
// function A() {
//     return sum
// }
// function B() {
//     return sum
// }
//
// let a = new A;
// let b = new B;
//
// console.log(a == b);

//

// function Calculator() {
//     this.read = function () {
//         this.x = parseInt(prompt('Вкажіть число: '), 0);
//         this.y = parseInt(prompt('Вкажіть число: '), 0);
//
//         this.sum = function () {
//             return this.x + this.y
//         }
//
//         this.mul = function () {
//             return this.x * this.y
//         }
//
//         this.dvs = function () {
//             if(this.y === 0) {
//                 return 'Ділити на нуль не можна!'
//             }
//             return this.x / this.y
//         }
//
//         this.rem = function () {
//             return this.x - this.y
//         }
//     }
// }
//
// let calculator = new Calculator();
// calculator.read();
//
// console.log('Sum = ', calculator.sum());
// console.log('Mul = ', calculator.mul());
// console.log('Dvs = ', calculator.dvs());
// console.log('Rem = ', calculator.rem());

//

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value += parseInt(prompt('Вкажіть число:', 0))
    }
}

let accumulator = new Accumulator(1); // початкове значення 1

accumulator.read(); // додає введене користувачем значення
accumulator.read(); // додає введене користувачем значення

console.log(accumulator.value);
