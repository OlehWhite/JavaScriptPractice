const calc = {
    operand1: '',
    operand2: '',
    sign: '',
    finish: false,
    memoryPlus: '',
    newOperand: '',
    memoryClear: '0',
};

window.addEventListener("DOMContentLoaded", () => {
    const btns = document.querySelector(".keys");
    btns.addEventListener("click", click)
})

const click = (e) => {
    // Перевірка в консолі на правильність цифр
    console.log(e.target.value)

    // Кнопки MRC M+ M-
    if (/[mrc]$/.test(e.target.value)) {
        // Якщо нажав другий раз підряд на кнопку mrc
        if(calc.memoryPlus) {
            showLetterM('m')
            show(calc.memoryPlus)
        } else {
            show('0')
            showLetterM('')
            return false
        }
        calc.memoryPlus = !calc.memoryPlus
        return false
    }
    if (/[m-]/.test(e.target.value) && calc.memoryPlus > '0') {
        showLetterM('')
        calc.memoryPlus = '0'
        calc.newOperand = ''
        return false
    }
    if (/[m]\+/.test(e.target.value)) {
        showLetterM('m')
        // calc.newOperand += e.target.value
        calc.memoryPlus = calc.newOperand
    }

    // Якщо натиснули біля кнопки
    if(!e.target.classList.contains('button')) return

    if (/[0-9.]/.test(e.target.value) && calc.sign === "") {
        // Перва цифра
        calc.operand1 += e.target.value
        show(calc.operand1)
        calc.newOperand = calc.operand1
    } else if (/[0-9.]/.test(e.target.value) && calc.sign !== "" && calc.operand2 !== 'C') {
        // Друга цифра
        calc.operand2 += e.target.value
        show(calc.operand2)
    } else if (calc.operand1 !== '' && calc.operand2 !== '' && calc.finish) {
        // Для третьої цифри
        calc.operand2 = e.target.value;
        calc.finish = false;
        if (calc.operand2 === '=') {
            return false
        }
        if(calc.operand2 === 'C') {
            calc.operand1 = '';
            calc.operand2 = '';
            calc.sign = '';
            show(calc.memoryClear)
            return false
        }
        show(calc.operand2)
    } else if (/[+*-/]$/.test(e.target.value)) {
        // Для знаку
        calc.sign = e.target.value
    } else if (/[C]/.test(e.target.value)) {
        // Для видалення
        if(calc.operand1 !== 0) {
            calc.memoryPlus = calc.newOperand
        }
        calc.operand1 = '';
        calc.operand2 = '';
        calc.sign = '';
        show(calc.memoryClear)
        return false
    } else if (/[=]/.test(e.target.value)) {
        // Якщо додаємо 3-тє число
        if (calc.operand2 === '') calc.operand2 = calc.operand1
        // Математичні операції
        switch (calc.sign) {
            case '+':
                calc.operand1 = (+calc.operand1) + (+calc.operand2);
                break;
            case '-':
                calc.operand1 = calc.operand1 - calc.operand2;
                break;
            case '*':
                calc.operand1 = calc.operand1 * calc.operand2;
                break;
            case '/':
                // Якщо ділення на 0
                if (calc.operand2 === '0') {
                    show('Помилка')
                    return false
                }
                calc.operand1 = calc.operand1 / calc.operand2;
                break;
        }
        // Якщо багато разів нажимати дорівню
        // Виправляє, якщо в в операнди записеється знак дорівню, який із Switch дає NaN
        if(isNaN(calc.operand1) && calc.operand2 === '=') {
            calc.operand1 = '';
            calc.operand2 = '';
            calc.sign = '';
            return false
        }
        show(calc.operand1)
        calc.finish = true
    } else {
        console.error("error")
    }
}

const show = (data) => {
    document.querySelector('.display > .inp-two').value = data
}

const showLetterM = (m) => {
    document.querySelector('.display > .inp-one').value = m
}