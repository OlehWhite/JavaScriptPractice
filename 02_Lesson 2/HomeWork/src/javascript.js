// Задача №1
// const a = parseInt(prompt('Вкажіть перше число:'));
// const b = parseInt(prompt('Вкажіть друге число:'));
//
// const res = (a + b < 4) ? 'Мало' : 'Багато';
// document.write(res);

// Задача №2
// const login = prompt('Вкажіть логін:');
//
// (login === 'Вася') ? document.write(message = 'Привіт') :
//     (login === 'Директор') ?  document.write('Доброго дня!') :
//         (login === '') ? document.write('Нема логіна') :
//             document.write('');

// Задача №3
// let a = parseInt(prompt("Вкажіть число ",""));
// let b = parseInt(prompt("Вкажіть число",""));
//
// for (let i = a; i < b; i++) {
//     if (i % 2 === 1) {
//         document.write('Непарне: ', i, '<br>')
//     }
// }
//
// let start = a;
//
// while (a < b) {
//     a++;
//
//     if(a < b) {
//         start += a;
//     }
// }
// document.write('Сумма проміжуточний чисел: ', start);

// Задача №4
// Прямокунтик
// const horizontal = parseInt(prompt("Вкажіть горизонтальну кількість зірочок",""));
// const vertical = parseInt(prompt("Вкажіть вертикальну кількість зірочок",""));
// const star = '*';
// const space = '&nbsp&nbsp';
//
// for (let i = 0; i < vertical; i++) {
//     let vertLine = '';
//
//     if(i === 0 || i === vertical - 1) {
//         for (let j = 0; j < horizontal; j++) {
//             vertLine += star;
//         }
//     } else {
//         vertLine = star;
//
//         for (let j = 0; j < horizontal - 2; j++) {
//             vertLine += space;
//         }
//         vertLine += star;
//     }
//     document.write(vertLine, '<br>')
// }

// Прямокутний трикутник
// let num = parseInt(prompt('Вкажіть число: '));
// let string = '';
//
// for (let i = 1; i <= num; i++) {
//     for (let j = 0; j < i; j++) {
//         if(i === num) {
//             string += '*';
//         }
//         else {
//             if (j === 0 || j === i - 1) {
//                 string += '*';
//             }
//             else {
//                 string += '&nbsp&nbsp';
//             }
//         }
//     }
//     string += '<br>';
// }
// document.write(string, '<br>');

// Рівносторонній трикутник
// const vertical = parseInt(prompt('Вкажіть непарну кількість зірочок для сторін Прямокутного трикутника:'));
// const horizontal = (vertical - (vertical % 2)) / 2 + (vertical % 2);
// let spaces = vertical;
// const star = '*';
// const space = '&nbsp&nbsp';
//
// for (let i = horizontal; i > 0; i--) {
//     let line = '';
//
//     for (let j = i; j <= vertical; j++) {
//         if (i === 1) {
//             line += star;
//         } else if (j === vertical || j === spaces) {
//             line += star;
//         } else {
//             line += space;
//         }
//     }
//     spaces -= 2;
//     document.write(line, '<br>');
// }

//Ромб
// for(let i = 1; i <= 4; i++){
//     for(let j = 1; j <= 4 - i; j++){    // Пробіли
//         document.write("&ensp;");
//     }
//
//     for(let k = 1; k <= 2 * i - 1; k++){    // Рахунок * та пробілів
//         if (k === 1 || k === 2 * i - 1) {   // Вивести * в першому і останньому стовбці кожної строки і вивести пробіли для інших
//             document.write("*");
//         } else{
//             document.write("&ensp;");
//         }
//     }
//     document.write("<br/>");    // Новая линия
// }
//
// for(let i=1; i<=3; i++) {   // Останній три лінії
//     for (let j = 1; j <= i; j++) {  // Пробіли для печаті
//         document.write("&ensp;");
//     }
//
//     for (let k = 1; k <= 7 - 2 * i; k++) {  // Виводимо зірочку і пробіл між ними
//         if (k === 1 || k === 7 - 2 * i) {   // Перший і останній стовбці кожної строки вивиодять *, а інші роблять пробіли
//             document.write("*");
//         } else {
//             document.write("&ensp;");
//         }
//     }
//     document.write("<br/>");
// }
