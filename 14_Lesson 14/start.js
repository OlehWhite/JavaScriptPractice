/*
Создайте обьект userOne, добавьте к нему свойства имя, фамилия, возраст и функцию, которая будет выводить  Привет! Я имя + фамилия  Выведите имя и фамилию пользователя с объекта userOne.


Сделайте так, чтобы контекст в методе объекта userOne был глобальный объект window.

Создайте еще один объект userTwo и заполните его теми же свойствами, но без метода.

Выведите информацию с объекта userTwo используя метод объекта userOne.

Работа с контекстом(bind call apply) bind call apply


*/

const userOne = {
    name : "Ivan",
    lastName : "Ivanov",
    age : 25,
    show(phone = 0){
        console.log(`Привет! Я ${this.name}  ${this.lastName} ${this.age} ${phone}`)
    }
}

const userTwo = {
    name : "Pavlo",
    lastName : "vnfjvn",
    age : 45
}

userOne.show.call(userTwo, "380855225541")
