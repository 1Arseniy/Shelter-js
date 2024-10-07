const cell = document.querySelectorAll('.cell'); 
const png = document.querySelector('img');
let step = 0;

const icons = [
    './icon/circle.png',
    './icon/cross-1.png'
];

cell.forEach((el) => {
    el.addEventListener('click', function() {
           if(cell !== null) {
              png.src = icons[1]
           }
         
    })
})
