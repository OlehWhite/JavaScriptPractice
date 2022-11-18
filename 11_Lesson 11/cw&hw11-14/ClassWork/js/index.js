window.addEventListener('DOMContentLoaded', () => {
    const input = document.createElement('input'),
    span = document.createElement('span'),
    x = document.createElement('button')

    input.placeholder = 'Price';
    input.className = 'num';
    input.type = 'number';
    x.innerText = 'X';

    // input.setAttribute('type', 'number')
    input.addEventListener('focus', () => {
        input.classList.add('border-focus');
        input.before(span);
        span.after(x)
    })

    x.addEventListener('click', () => {
        x.remove();
        span.remove();
        input.value = '';
    })

    input.addEventListener('input', (e) => {
        span.innerText = `Поточна ціна: ${e.target.value}`;
    })

    input.addEventListener('blur', () => {
        input.classList.remove('border-focus');
        if (input.value < 0) {
            input.classList.add('error');
            input.after('Будь ласка відправте конкретний прайс')
        }
    })

    document.body.append(input);
})