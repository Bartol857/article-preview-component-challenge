const btnUp = document.querySelector('.box__arrow-up')
const btnDown = document.querySelector('.box__arrow-down')
const social = document.querySelector('.box__social')


const switchSection = () => {
    btnUp.addEventListener('click', () => {
        social.style.top = '-75px'
    })

    btnDown.addEventListener('click', () => {
        social.style.top = '0px'
    })
}

switchSection();