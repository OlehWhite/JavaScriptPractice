document.querySelector('button').onclick = () => {
    const circle = parseInt(prompt('Вкажіть діаметр кола:', '100'));
    for (let i = 0; i < 100; i++) {
        const button = document.querySelector('button');
        const div = document.createElement('div');

        div.style.width = `${circle}px`;
        div.style.height = `${circle}px`;
        div.style.borderRadius = '50%'
        div.textContent = div.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 50%, 50%)`;
        button.after(div)
    }
}

document.querySelector('div').onclick = (e) => {
    const div = e.target.closest('.delete');
    if(!div) {
        return
    }
    div.parentElement.remove()
}