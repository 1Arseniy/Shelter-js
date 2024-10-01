const canvas = document.querySelector('.canvas');
const game = canvas.getContext('2d');

let area =  32;
let count = 0;

const foods = new Image() 
foods.src = "icon/icon-avacado.png"