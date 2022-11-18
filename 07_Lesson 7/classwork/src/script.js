// class CreateNewUser {
//     constructor(name, surname, birthday) {
//         this.name = name;
//         this.surname = surname;
//         this.birthday = birthday.split('.');
//     }
//     getLogin() {
//         return this.name[0].toLowerCase() + this.surname.toLowerCase()
//     }
//     getAge() {
//         return new Date().getFullYear() - this.birthday[2]
//     }
//     getPassword() {
//         return this.name[0].toUpperCase() + this.surname.toLowerCase() + this.birthday[2]
//     }
// }
//
// const newUser = new CreateNewUser(
//     prompt("Ім'я", 'Oleh'),
//     prompt("Прізвище", 'Bilostotskyi'),
//     prompt("Дата народження формату: дд.мм.гггг", '22.02.1998')
// );
//
// console.log(newUser.getLogin());
// console.log(newUser.getAge());
// console.log(newUser.getPassword());
//
// // Остання задача
//
// const arrayOne = ['hello', 'world', 23, '23', null];
// const arrayTwo = 'string';
// console.log(arrayOne)
//
// function newFilterArray (agrOne, agrTwo) {
//     return agrOne.filter(item => typeof item !== agrTwo)
// }
//
// const res = newFilterArray(arrayOne, arrayTwo);
// console.log(res)
//


    for (let i = 0; i < 3; i++) {
        console.log(i)
    }

