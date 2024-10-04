const canvas = document.querySelector('.canvas');
const game = canvas.getContext('2d');


let area =  32;
let count = 0;
let score = 0;

let food = {
    x: 100,
    y: 100
}

function randomPlaceFood(min,max) {
    return Math.floor(Math.random() (max - min) + min );
}


let snake = {
    x: 100,
    y: 100,
    dx: area,
    dy: 0,
    cells: [],
    maxCells: 2
}

// Запуск игры
function playGame() {
    requestAnimationFrame(playGame);

    if(count++ < 4 ) {
        return;
    }

    count = 0;
    context.clearRect(0,0, canvas.width, canvas.height);
    snake.x += snake.dx;
    snake.y += snake.dy;
}

// увелечение змейки
snake.cells.unshift({
    x: snake.x,
    y: snake.y
})

if (snake.sells.length > snake.maxCells) {
    snake.sells.pop();
}

game.fiilStyle = 'red';