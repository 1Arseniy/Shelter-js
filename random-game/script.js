const cell = document.querySelectorAll('.cell'); 
// let png = document.querySelectorAll('.png');

const icons = [
    './icon/circle.png',
    './icon/cross-1.png'
];

cell.forEach((el) => {
    el.addEventListener('click', () => {
        let picture = el.dataset.png
        let pictureDown = document.querySelector(`.${picture}`)
        pictureDown.src = icons[0]
    })
})