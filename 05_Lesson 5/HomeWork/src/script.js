//  Задача №1
const documentName = {
    head: '',
    body: '',
    footer: '',
    date: '',
    document: function (name) {
        document.write('<div>' + 'Заголовок ' + name + ' - ' + this.head);
        document.write('<div>' + 'Тіло ' + name + ' - ' + this.body);
        document.write('<div>' + 'Підвал ' + name + ' - ' + this.footer);
        document.write('<div>' + 'Дата ' + name + ' - ' + this.date)
    }
}

const newDocumentName = documentName;
newDocumentName.app = documentName;
newDocumentName.fnApp = function () {
    newDocumentName.head = prompt('Вкажіть заголовок: ', 'Заголовок!');
    newDocumentName.app.head = newDocumentName.head;

    newDocumentName.body = prompt('Вкажіть тіло: ', 'Тіло!');
    newDocumentName.app.body = newDocumentName.body;

    newDocumentName.footer = prompt('Вкажіть підвал: ', 'Підвал!');
    newDocumentName.app.footer = documentName.footer;

    newDocumentName.date = prompt('Вкажіть дату: ', '16.06.2022');
    newDocumentName.app.date = newDocumentName.date;
}

newDocumentName.fnApp();
newDocumentName.document('документа');

document.write('<hr>')

newDocumentName.app.document('додатку')

//  Задача №2
const obj = {
    'Коля': '1000',
    'Вася': '500',
    'Петя': '200',
}

document.write('<p>' + obj['Коля'], ' ', obj['Петя']);

//  Задача №3
const start = 'var_text_hello';
console.log('Старт: ', start)

function res() {
    return start.split('_')
        .map((item) => item[0].toUpperCase() + item.slice(1))
        .join('')
}

const finRes = res(start)
console.log('Фініш: ', finRes)