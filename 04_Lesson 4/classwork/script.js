// Задача №5
let a = null;
if(a > 0) {
    const ggg = function (){
        console.log(1)
    }
} else {
    const ggg = function (){
        console.log(2)
    }
}

// Задачака №6 "Калькулятор"
// Вказуємо два числа та математичний знак
const numberOne = parseInt(prompt('Вкажіть перше ціле число: '));
const operators = prompt('Вкажіть одну із дій: +, -, *, /');
const numberTwo = parseInt(prompt('Вкажіть друге ціле число: '));

// Перівка на число, та математичні дії
function addition(a, b) {
    if(a !== Number || b !== Number){
        console.error('Потрібно вказати число!')
    }
    return a + b
}

function subtraction(a, b) {
    if(a !== Number || b !== Number){
        console.error('Потрібно вказати число!')
    }
    return a - b
}

function multiplication(a, b) {
    if(a !== Number || b !== Number){
        console.error('Потрібно вказати число!')
    }
    return a * b
}

function division(a, b) {
    if(b === 0) {
        console.error('Ділити на 0 не можна!');
    } else if (a !== Number || b !== Number) {
        console.error('Потрібно вказати число!')
    }
    return a / b
}

// Основна функція calculate()
function calculate(a, b, callback) {
    return callback(a, b)
}

// Пошук потрібної нам операциї та її вивід
switch (operators) {
    case '+':
        document.write(calculate(numberOne, numberTwo, addition));
        break;
    case '-':
        document.write(calculate(numberOne, numberTwo, subtraction));
        break;
    case '*':
        document.write(calculate(numberOne, numberTwo, multiplication));
        break;
    case '/':
        document.write(calculate(numberOne, numberTwo, division));
        break;
    default:
        console.error('Щось пішло не так... Спробуйте вказати математичний знак правильно!');
}

//Задача №7
const numOne = (a) => {
    return 3
}

const numTwo = (b) => {
    return 4
}

function ggg(a, b) {
    return a() + b()
}

const res = ggg(numOne, numTwo);
console.log(res)