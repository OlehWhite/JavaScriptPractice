const div = document.querySelector('.phone-number')
const userTel = document.querySelector('.number-info')
const button = document.querySelector('.btn')

const rightNum = /^\d{3}-\d{3}-\d{2}-\d{2}$/

button.addEventListener( 'click', even => {

    const userNum = document.querySelector('.number-info').value

    if (rightNum.test(userNum)) {
        userTel.style.backgroundColor = 'green'
        document.location.assign('https://www.meme-arsenal.com/memes/5f312a77b70048308f6afc6dbc0ba52b.jpg')
    } else if (userNum.length < 13) {
        div.prepend('Ви вказали котороткий номер телефону!')
    } else if (userNum.length > 13) {
        div.prepend('Ви вказали багато цифр мобільного телефону!')
    } else if (userNum !== Number) {
        div.prepend('Потрібно вказати тільки цифри і дефіси!')
    } else {
        div.prepend('Некоректно вказані дані!')
    }
})
