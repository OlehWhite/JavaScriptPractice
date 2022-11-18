// Задача №1
// function camelize(str) {
//     return str
//         .split('-')
//         .map((item, index) => {
//               if(index == 0) {
//                  return item
//               } else {
//                   return item[0].toUpperCase() + item.slice(1)
//               }
//             })
//         .join('')
// }
//
// const one = camelize("background-color");
// const two = camelize("list-style-image");
// const three = camelize("-webkit-transition");
//
// const res1 = camelize(one);
// const res2 = camelize(two);
// const res3 = camelize(three);
//
// console.log(res1, res2, res3);

// Задача №2
// function filterRange(arr, a, b) {
//     return arr.filter(item => a <= item && item <= b);
// }
//
// let arr = [5, 3, 8, 1];
//
// let filtered = filterRange(arr, 1, 4);
//
// console.log(filtered); // 3,1 (совпадающие значения)
//
// console.log(arr); // 5,3,8,1 (без изменений)

//Задача №3
// const filterRangeInPlace = (arr, a, b) => {
//     for (let i = 0; i < arr.length; i++) {
//         if(a > arr[i] || arr[i] > b) {
//            arr.splice(i, 1);
//            i--;
//         }
//     }
// }
//
// let arr = [5, 3, 8, 1];
//
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
//
// console.log(arr); // [3, 1]

//Задача №4
// let arr = [5, 2, 1, -10, 8];
//
// const res = arr.sort((a, b) => b - a)
//
// console.log(arr); // 8, 5, 2, 1, -10

//Задача №5
// let arr = ["HTML", "JavaScript", "CSS"];
//
// const copySorted = (arr) => {
//     return arr.slice().sort()
// }
//
// let sorted = copySorted(arr);
//
// console.log(sorted); // CSS, HTML, JavaScript
// console.log(arr); // HTML, JavaScript, CSS (без изменений)

//Задача №6
// function calculate(a, b) {
//     return a + b
// }
//
// const res = calculate(5, 10);
// console.log(res);

//Задача №7
// let vasya = {
//     name: "Вася",
//     age: 25
// };
// let petya = {
//     name: "Петя",
//     age: 30
// };
// let masha = {
//     name: "Маша",
//     age: 28
// };
//
// let users = [ vasya, petya, masha ];
//
// let names = users.map(item => item.name)
//
// console.log(names); // Вася, Петя, Маша

//Задача №8
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
//
// let users = [ vasya, petya, masha ];
//
// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
// }));
//
//     /*
//     usersMapped = [
//       { fullName: "Вася Пупкин", id: 1 },
//       { fullName: "Петя Иванов", id: 2 },
//       { fullName: "Маша Петрова", id: 3 }
//     ]
//     */
//
// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // Вася Пупкин

//Задача №9
// let arr = [1, 2, 3];
//
// const res = (arr) => {
//     return arr.sort(() => Math.random() - 0.5)
// }
//
// console.log(res(arr));
// // arr = [3, 2, 1]
//
// console.log(res(arr));
// // arr = [2, 1, 3]
//
// console.log(res(arr));
// // arr = [3, 1, 2]

//Задача №10
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
//
// let arr = [ vasya, petya, masha ];
//
// const getAverageAge = (users) => {
//     return arr.reduce((item, index) => item + index.age, 0) / users.length;
// }
//
// console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28