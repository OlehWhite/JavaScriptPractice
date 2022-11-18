// Поле для часу
const minuteElement = document.querySelector('.minute')
const secondElement = document.querySelector('.second')
const millisecondElement = document.querySelector('.millisecond')

// Кнопки
const startButton = document.querySelector('.start')
const stopButton = document.querySelector('.stop')
const resetButton = document.querySelector('.reset')

// Функція яка скидає все до нуля *Reset*
const clearFnReset = () => {
    minute = Number('00')
    second = Number('00')
    millisecond = Number('00')
    minuteElement.innerText = '00'
    secondElement.innerText = '00'
    millisecondElement.innerText = '00'
}

// Проба
startButton.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})

stopButton.addEventListener('click', () => {
    clearInterval(interval)
})

resetButton.addEventListener('click', () => {
    clearInterval(interval)
    clearFnReset()
})


// Змінні година, хвилина, секундаб та інтервал
let minute = Number('00'),
    second = Number('00'),
    millisecond = Number('00'),
    interval

const startTimer = () => {
    millisecond++

    // Мілісекунди
    if (millisecond < 9) {
        millisecondElement.innerText = '0' + millisecond
    }
    if (millisecond > 9) {
        millisecondElement.innerText = millisecond
    }
    if (millisecond > 99) {
        second++
        secondElement.innerText = '0' + second
        millisecond = 0
        millisecondElement.innerText = '0' + millisecond
    }

    // Секунди
    if (second < 9) {
       secondElement.innerText = '0' + second
    }
    if (second > 9) {
        secondElement.innerText = second
    }
    if (second > 59) {
        minute++
        minuteElement.innerText = '0' + minute
        second = 0
        secondElement.innerText = '0' + second
    }

    // Хвилини
    if (minute < 9) {
        minuteElement.innerText = '0' + minute
    }
    if (minute > 9) {
        minuteElement.innetText = minute
    }
    if(minute > 59) {
        minute = 0
        minuteElement.innerText = '0' + minute
    }
}

let button;

const btnStartSilver = () => {
        button.classList.add('silver')
        button.classList.remove('stopwatch-display', 'red', 'green')
    },

    btnStopRed = () => {
        button.classList.remove('stopwatch-display', 'silver', 'green')
        button.classList.add('red')
    },

    btnRemoveGreen = () => {
        button.classList.add('green')
        button.classList.remove('stopwatch-display', 'silver', 'red')
    }

document.querySelector('.start').onclick = btnStartSilver
document.querySelector('.stop').onclick = btnStopRed
document.querySelector('.reset').onclick = btnRemoveGreen
button = document.querySelector('.stopwatch-display')

