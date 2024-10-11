const cell = document.querySelectorAll('.cell'); 
// let png = document.querySelectorAll('.png');
// let index = 0;

const icons = [
    './icon/circle.png',
    './icon/cross-1.png'
];

function showPictures() {
    cell.forEach((el) => {
        el.addEventListener('click', () => {
               let picture = el.dataset.png
               let pictureDown = document.querySelector(`.${picture}`)
               pictureDown.src = icons[1]
              
            })
        })
    } 
 showPictures()

const win = {
   winConbenation: [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
  ]
}