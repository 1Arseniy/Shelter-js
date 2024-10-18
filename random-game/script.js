const cell = document.querySelectorAll(".cell");
const png = document.querySelectorAll('.png')
const text = document.querySelector('.text')
const finishWidow = document.querySelector(".finish-window");
let elemFree = [];
const icons = ["./icon/circle.png", "./icon/cross-1.png"];
const win = {
    winConbenation: [
       [0, 1, 2],
       [3, 4, 5],
       [6, 7, 8],
       [0, 3, 6],
       [1, 4, 7],
       [2, 5, 8],
       [0, 4, 8],
       [2, 4, 6],
   ],
};

function addCircle() {
    cell.forEach((el) => {
        if (!el.classList.contains("active")) {
            elemFree.push(el.dataset.png);
        }
    });
    const elemCircle = document.querySelector(`.${elemFree[0]}`);
    elemCircle.src = icons[0];
    const parentElemCircle = elemCircle.parentNode;
    parentElemCircle.classList.add("active");
    parentElemCircle.classList.add("circle");
}

function addCross(el) {
    let picture = el.dataset.png;
    let pictureDown = document.querySelector(`.${picture}`);
    pictureDown.src = icons[1];
    el.classList.add("active");
    el.classList.add("cross");
    elemFree = [];
    setTimeout(addCircle, 200)
}


function click() {
    function validationFreeCell() {
        cell.forEach((el) => {
            if (!el.classList.contains("active") && el === this) {
                addCross(this);
            }
        });
    }
    cell.forEach((el) => {
        el.addEventListener("click", validationFreeCell);
    });
}
click();

function validationVictory() {
    for(let i =0; i < win.winConbenation.length; i++) { 
        const el1 = document.querySelector(`.cell-${win.winConbenation[i][1]}`);
        const el2 = document.querySelector(`.cell-${win.winConbenation[i][2]}`);
        const el0 = document.querySelector(`.cell-${win.winConbenation[i][0]}`); 
        if(el0.classList.contains('cross') && el1.classList.contains('cross') && el2.classList.contains('cross')){
                png.forEach((el) => {
                    el.classList.add('filter')
                })
            setTimeout(() => finishWidow.classList.add('open'), 1000)
        } else if (el0.classList.contains('circle') && el1.classList.contains('circle') && el2.classList.contains('circle')) {
            png.forEach((el) => {
                el.classList.add('filter')
            })
            text.textContent = 'Win Circles'
            setTimeout(() => finishWidow.classList.add('open'), 1000)
        } 
        
    }
}

cell.forEach((el) => {
    el.addEventListener('click',validationVictory)
})

