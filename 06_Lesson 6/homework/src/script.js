// Задача 1
function Human(name, age) {
    this.name = name;
    this.age = age;
}

const array = [
    new Human('Oleg', 24),
    new Human('Alina', 21),
    new Human('Vlad', 35),
    new Human('Dima', 10)
];

array.sort(function (firstName, secondName) {
    return firstName.age - secondName.age
})
console.log(array)

// Задача 2
function Person(age, name, surname, work, study){
    this.age = age;
    this.name = name;
    this.surname = surname;
    this.work =  work;
    this.study = study;

    Person.count++
}

Person.count = 0;

Person.prototype.sayInfoPerson = function () {
    if (this.age <= Number(17)) {
        return `Тебе звати ${this.name} ${this.surname}. Тобі ${this.age}, і ти навчаєшся в ${this.study}!`
    } else {
        return `Тебе звати ${this.name} ${this.surname}. Тобі ${this.age}, ти навчався в ${this.study}, працюєш - ${this.work}!`
    }
}

const personOne = new Person(24, 'Олег', 'Вайт', 'адміністратор сайту', 'КНУТД');
const personTwo = new Person(20, 'Вася', 'Блек', 'фрілансер', 'ЛНУ');
personOne.sayInfoPerson();
personTwo.sayInfoPerson();

console.log(personOne.sayInfoPerson())