// const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
// const rect = new XMLHttpRequest();

// rect.open('GET', url);

// rect.addEventListener('readystatechange', () => {
//     if (rect.readyState === 4 && rect.status >= 200 && rect.status < 300) {
//          showCurensy(JSON.parse(rect.responseText));
//          console.log(rect);
//     }
// });

// rect.send();

// const showCurensy = (array) => {
//     array.forEach(element => {
//         const tr = document.createElement('tr');
//         const txtTd = document.createElement('rd');
//         const rateTd = document.createElement('rd');
//         const { txt, rate } = element;

//         txtTd.innerText = txt;
//         rate.innerText = rateTd;

//         tr.append(txtTd, rateTd);

//         document.querySelector('tbody').append(tr);
//     });
// }



const url = 'https://swapi.dev/api/people';

const data = fetch(url, { metod: 'get' });      // Створюємо запит на сервер за допомогою fetch

const dataOne = data.then((res) => res.json(), (error) => console.error(error))     // робота з запитом, оброблюємо як promis

dataOne.then((res) => {
    showInfoPerson(res.results)
})

const showInfoPerson = array => {
    array.forEach(element => {
        const div = document.createElement('div')
        div.classList.add('card')

        const divName = document.createElement('div')
        const divHeight = document.createElement('div')
        const divMass = document.createElement('div')
        const divHair_color = document.createElement('div')
        const divSkin_color = document.createElement('div')

        const { name, height, mass, hair_color, skin_color } = element

        divName.innerText = `Ім'я: ${name}`
        divHeight.innerText = `Зріст: ${height}`
        divMass.innerText = `Вага: ${mass}`
        divHair_color.innerText = `Колір волосся: ${hair_color}`
        divSkin_color.innerText = `Колір шкіри: ${skin_color}`

        div.append(divName, divHeight, divMass, divHair_color, divSkin_color)

        document.querySelector('div').append(div)
    });
}