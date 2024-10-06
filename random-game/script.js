const cell = document.querySelectorAll('.cell'); 
let step = 0;

const icons = [
   './icon/circle.png',
   './icon/cross.png'
]

cell.forEach((el) => {
    el.addEventListinier('click', () => {
        icons.length[0];
    })
})

/* function tap() {
    cell.src = icons[0]
}

cell.addEventListinier('click', tap) */