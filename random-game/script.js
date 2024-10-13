const cell = document.querySelectorAll(".cell");
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
    // let randomElemFree
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

    addCircle();
}

const finishWidow = document.querySelector("finish-window");
const png = document.querySelectorAll('.png')

function validationVictory() {
    for (let i = 0; i < win.winConbenation.length; i++) {
        const el0 = document.querySelector(`.cell-${win.winConbenation[0]}`);
        const el1 = document.querySelector(`.cell-${win.winConbenation[1]}`);
        const el2 = document.querySelector(`.cell-${win.winConbenation[2]}`);
        
        if(el0.classList.contains('cross') && el1.classList.contains('cross') && el2.classList.contains('cross') ||  el0.classList.contains('circle') && el1.classList.contains('circle') && el2.classList.contains('circle')) {
            png.el0.classList.add('filter');
            png.el1.classList.add('filter');
            png.el2.classList.add('filter');
            break
        }
    }
}

function showPictures() {
    function validationFreeCell() {
        // console.log(this);
        cell.forEach((el) => {
            if (!el.classList.contains("active") && el === this) {
                addCross(this);
            }
        });
    }

    cell.forEach((el) => {
        el.addEventListener("click", validationFreeCell);
    });
    
    validationVictory();
}
showPictures();
