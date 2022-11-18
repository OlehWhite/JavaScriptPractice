// Создай класс, который будет создавать пользователей с именем и фамилией. Добавить к классу метод для вывода имени и фамилии
class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    show() {
        console.log(`${this.name} ${this.surname}`)
    }
}

const firstUser = new User('Олег', 'Білостоцький')
firstUser.show()

// Создай список состоящий из 4 листов. Используя джс обратись к 2 li и с использованием навигации по DOM дай 1 элементу синий фон, а 3 красный
window.onload = () => {
    const item = document.getElementsByTagName("li")[1]
    item.previousSibling.style.color = 'blue'
    item.nextSibling.style.color = 'red'
}

// Создай див высотой 400 пикселей и добавь на него событие наведения мышки. При наведении мышки выведите текстом координаты, где находится курсор мышки
window.addEventListener('DOMContentLoaded', init, false);

function init() {
    const div = document.querySelector('.container-two');
    div.addEventListener('mousemove', handler, false);
}

const handler = (e) => {
    let message = '';
    message += `x: ${e.clientX} | `
    message += `y: ${e.clientY}`
    document.querySelector('.container-three').innerText = message
}

// Создай кнопки 1,2,3,4 и при нажатии на кнопку выведи информацию о том какая кнопка была нажата
const divOne = document.getElementById('btn1'),
    divTwo = document.getElementById('btn2'),
    divThree = document.getElementById('btn3'),
    divFour = document.getElementById('btn4')

divOne.addEventListener('click', () => {
    alert('Ви натиснули на першу кнопку')
})

divTwo.addEventListener('click', () => {
    alert('Ви натиснули на другу кнопку')
})

divThree.addEventListener('click', () => {
    alert('Ви натиснули на третю кнопку')
})

divFour.addEventListener('click', () => {
    alert('Ви натиснули на четверту кнопку')
})

// Создай див и сделай так, чтобы при наведении на див, див изменял свое положение на странице
window.addEventListener('DOMContentLoaded', () => {
    const div = document.getElementsByTagName('div')[4]

    const mouse = (e) => {
        e.target.classList.add('hover')
    }

    div.addEventListener('mouseover', mouse)

    div.onmouseout = function () {
        this.classList.remove('hover')
    }
})

// Создай поле для ввода цвета, когда пользователь выберет какой-то цвет сделай его фоном body
const inputColor = document.querySelector('.inp-color')
const changeColorBody = () => {
    const color = inputColor.value;
    document.body.style.backgroundColor = color
}
inputColor.addEventListener('change', changeColorBody, false)

// Создай инпут для ввода логина, когда пользователь начнет Вводить данные в инпут выводи их в консоль
window.addEventListener('DOMContentLoaded', () => {
    const input = document.createElement('input'),
        span = document.createElement('span');

    input.placeholder = 'Login';
    input.name = 'login';
    input.type = 'text';

    // Создайте поле для ввода данных поле введения данных выведите текст под полем
    input.addEventListener("input", (e) => {
        input.classList.add('display')
        input.after(span)
    })
    document.body.append(input);

    input.addEventListener('input', (e) => {
        span.innerText = e.target.value
        res = span.innerText
        console.log(res)
    })
})