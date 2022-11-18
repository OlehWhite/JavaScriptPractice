// Задача №1
// const arrOne = ['a', 'b', 'c'];
// const arrTwo = [1, 2, 3];
// const resArr = arrOne.concat(arrTwo);
// console.log(resArr);

// Задача №2
// const arr = ['a', 'b', 'c'];
// arr.push(1, 2, 3);
// console.log(arr);

// Задача №3
// const arr = [1, 2, 3];
// arr.reverse();
// console.log(arr);

// Задача №4
// const arr = [1, 2, 3];
// arr.splice(4, 3, 4, 5, 6);
// console.log(arr);

// Задача №5
// const arr = [1, 2, 3];
// arr.splice(0, 0, 4, 5, 6);
// console.log(arr)
//
// // або
//
// const arrTwo = [1, 2, 3];
// arrTwo.unshift(4, 5, 6);
// console.log(arrTwo)

// Задача №6
// const arr = ['js', 'css', 'jq'];
// const resArr = arr[0];
// console.log(resArr);

// Задача №7
// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.splice(0,3);
// console.log(newArr)

// Задача №8
// const arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// console.log(arr);

// Задача №9
// const arr = [1, 2, 3, 4, 5];
// arr.splice(2, 0, 10);
// console.log(arr);

// Задача №10
// const arr = [3, 4, 1, 2, 7];
// const resArr = arr.sort((a, b) => a - b);
// console.log(resArr);

// Задча №11
// const arr = ['Привет, ', 'мир', '!'];
// const resOne = arr.join('');
// console.log(resOne);

// Задча №12
// const arr = ['Привет, ', 'мир', '!'];
// arr.splice(0,1, 'Пока');
// console.log(arr);

// Задча №13
// // Перший спосіб
// let arr = [];
// for (let i = 0; i < 5; i++) {
//     arr[i] = i + 1;
// }
// console.log(arr);
//
// // Другий спосіб
// const arrStandard = [1, 2, 3, 4, 5];
// console.log(arrStandard);
//
// // Третій спосіб
// const arrNew = new Array(1, 2, 3, 4, 5);
// console.log(arrNew);

// Задча №14
// const arr = {
//     'ru':['голубой', 'красный', 'зеленый'],
//     'en':['blue', 'red', 'green'],
// };
//
// console.log(arr.ru[0], arr.en[0]);

//Задача №15
// const arr = ['a', 'b', 'c', 'd'];
//
// const arrConcatFirst = arr[0] + '+' + arr[1];
// const arrConcatSecond = arr[2] + '+' + arr[3];
//
// console.log(arrConcatFirst, arrConcatSecond)

// //Задача №16
// const arr = parseInt(prompt('Вкажіть кількість елементів масива: ', 15));
// let str = [];
//
// for (let i = 0; i < arr; i++) {
//     str[i] = i + 1;
// }
// console.log(str)
//
// //Задача №17
// for (let i = 0; i <= str.length; i++) {
//     if (str[i] % 2 === 1) {
//         document.write('<span style="background-color: red">' + i + '</span>')
//     } else {
//         document.write('<p>' + i + '</p>')
//     }
// }

//Задача №18
const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
console.log('Старт: ', vegetables)

const res = vegetables.join(',');
console.log(res);
