let offset = 0;
const sliderLine = document.querySelector('.slider-item')

document.querySelector('.right').addEventListener('click', () => {
    offset += 400
    if(offset > 1600) {
        offset = 0
    }
    sliderLine.style.left = -offset + 'px'
})

document.querySelector('.left').addEventListener('click', () => {
    offset -= 400
    if(offset < 0) {
        offset = 1600
    }
    sliderLine.style.left = -offset + 'px'
})
