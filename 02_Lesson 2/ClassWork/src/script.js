// Задача №1
const a = parseInt(prompt("Введіть число 10"));

if (a === 10) {
    document.write("Вірно")
} else {
    document.write("Невірно")
}

// Задача №2
const min = parseInt(prompt("Введіть число від 0 до 59:"));

if (min >= 0 && min <= 15) {
    document.write('Діапазон: 0:00 - 0:15')
} else if (min >= 15 && min <= 30) {
    document.write('Діапазон: 0:15 - 0:30')
} else if (min >= 30 && min <= 45) {
    document.write('Діапазон: 0:30 - 0:45')
} else if (min >=45 && min <= 59) {
    document.write('Діапазон: 0:45 - 0:59')
} else {
    console.error("Невірний запис")
}

// Задача №3
const userAge = parseInt(prompt("Введіть свій вік:"));

if (userAge <= 18) {
    document.write('<meta http-equiv="refresh" content="0; url=https://www.youtube.com/watch?v=H4EzieDH4XQ">')
} else if (userAge >= 18 && userAge <= 35) {
    document.write('<meta http-equiv="refresh" content="2; url=https://google.com">')
} else if (userAge >= 35 && userAge <= 60) {
    document.write('<meta http-equiv="refresh" content="0; url=https://www.uz.gov.ua">')
}

// Тернарнік
(userAge <= 18) ? document.write('<meta http-equiv="refresh" content="0; url=https://www.youtube.com/watch?v=H4EzieDH4XQ">') : false