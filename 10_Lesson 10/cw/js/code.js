/*

- Реализуйте программу проверки телефона используя DOM Level 2 
- * Используя JS Создайте поле для ввода телефона и кнопку сохранения
- * Пользователь должен ввести номер телефона в формате 000-000-00-00
- * Поле того как пользователь нажимает кнопку сохранить проверте правильность ввода номера, если номер правильный сделайте зеленый фон и используя document.location переведите пользователя на страницу https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg если будет ошибка отобразите её в диве до input.

*/
//объект для хранения элементов
const createElement = (type, attr) => {
   const e = document.createElement(type);
    for( let property in attr ){
        e.setAttribute(property, attr[property])
    }
   return e
}

const elements = {
    input :  createElement(
     "input", {"type": "tel"}),
    btn: createElement(
         "input", {'type': "button", "value": "Сохранить"})
 }


/*
//поле для ввода
const input = createElement("input", {"type": "tel"})
//input.setAttribute("type", "tel")

//кнопка
const btn = createElement("input", {'type': "button", "value": "Сохранить"})
//btn.setAttribute("type", "button")
//btn.setAttribute("value", "Сохранить")
*/
document.body.append(elements.input, elements.btn)