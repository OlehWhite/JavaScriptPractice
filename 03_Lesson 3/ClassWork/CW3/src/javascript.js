const userNum = parseInt(prompt('Вкажіть цифру-індекс для його видалення: '));

let arr = [];

for (let i = 0; i < 15; i++) {
    arr[i] = i + 1;
}
document.write('Масив створений через цикл: ', arr, '<br>');
document.write('<br>')

const deleteUserNum = arr.splice(userNum,1);
document.write('Ваше число по індексу: ', deleteUserNum, '<br>');
document.write('<br>')

const resReversSky = arr.reverse().join(' &#9729 ');
document.write('Розвернутий масив із хмарками без вказаного вами числа: ', resReversSky, '<br>');
