// Задача №1
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arr = (fn, array) => {
    const arr = [];

    for (let i = 0; i < array.length; i++) {
        arr.push(fn(array[i]));
    }
    return arr
}

const fn = (index) => {
    return index * index
}

console.log(arr(fn, array))

//Задача №2
const ageUser = parseInt(prompt('Вкажіть скільки вам повних років: '))

// Варінат із '?'
function checkAge(age) {
    return age > 18 ? true : confirm('Батьки дозволили?')
}

console.log(checkAge(ageUser))

// Варіант из '||'
function checkAgeTwo(age) {
    return age > 18 || confirm('Батьки дозволили?')
}

console.log(checkAgeTwo(10))