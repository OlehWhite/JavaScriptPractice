const styles = ['Джаз', 'Блюз'];
document.write('Старт: ', '[ ', styles, ' ]', '<br>');

styles.push('Рок-н-ролл');
document.write('Запушив Рок-н-рол в кінець: ', '[ ', styles, ' ]','<br>');

styles.splice((Math.floor(styles.length / 2)),1, 'Класика');
document.write('Заміна середнього елементу: ', '[ ', styles, ' ]','<br>');

const removed = styles.splice(0,1);
document.write('Видалення першого елементу: ', '[ ', removed, ' ]','<br>');
document.write('Масиву без першого елементу: ', '[ ', styles, ' ]','<br>');

styles.unshift('Реп', 'Реггі');
document.write('Додавання двух елементі на початок масиву: ', '[ ', styles, ' ]','<br>');