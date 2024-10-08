const cell = document.querySelectorAll('.cell'); 
let png = document.querySelectorAll('img');
let step = 0;

const icons = [
    './icon/circle.png',
    './icon/cross-1.png'
];
/*  png.dataset.indexTwo;
console.log(png.dataset.indexTwo); */
cell.forEach((el) => {
    el.addEventListener('click', () => {
       const picture = png[4]
       png[4].src = icons[0]
       console.log(picture.dataset);

        // picture.src = './icon/circle.png'
       /*  png.dataset.indexTwo = '';
        console.log(png.dataset.indexTwo) */
      /*   let pngOne = document.querySelector('.png-1')
        pngOne.src = icons[0]; */
    })
})