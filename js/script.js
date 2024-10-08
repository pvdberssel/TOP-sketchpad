createGrid(20);
let defaultColor = 'black';
loadGrid();
const resizeButton = document.querySelector('.resize');

let state = ''
resizeButton.addEventListener('click', () => {
    numberGrid = Number(prompt('How many squares per row and column?'));

    while (numberGrid < 1 || numberGrid > 70) {
        numberGrid = Number(prompt('Make sure the value is larger than 0 and smaller than 70'));
    }

    removeGrid();
    createGrid(numberGrid);
    loadGrid();
})

const colorButton = document.querySelectorAll('.color')
colorButton.forEach((button) => {
    button.addEventListener('click', () => {
        state = ''
        defaultColor = button.classList[0];
        loadGrid()
    })
})
const multiColors = ['red', 'blue', 'green', 'purple', 'black', 'orange', 'pink'];
const multiColorButton = document.querySelector('.multi');
const interval = setInterval(function () {
    let multiColorValue = Math.floor(Math.random() * multiColors.length);
    multiColorButton.style.backgroundColor = multiColors[multiColorValue];

    const multiColorGrids = document.querySelectorAll('.multiColor')
    multiColorGrids.forEach((grid) => {
        grid.style.backgroundColor = multiColors[multiColorValue];
    })


}, 500);


multiColorButton.addEventListener('click', () => {
    defaultColor = multiColorButton.style.backgroundColor;
    state = 'multiColor'
})
function createGrid(amount) {
    const gridContainer = document.querySelector('.grid-container');

    for (j = 1; j <= amount; j++) {
        let container = document.createElement('div');
        container.className = 'container';
        gridContainer.appendChild(container);
        for (i = 1; i <= amount; i++) {
            let box = document.createElement('div');
            container.appendChild(box);
            box.className = 'box';
        }
    }
}

function removeGrid() {
    const gridContainer = document.querySelector('.grid-container');
    for (i = gridContainer.childNodes.length - 1; i > -1; i--) {
        gridContainer.removeChild(gridContainer.childNodes[i])
    }
}

function loadGrid() {
    const grids = document.querySelectorAll('.box');


    grids.forEach((grid) => {
        grid.addEventListener('mouseenter', () => {
            if(state == 'multiColor'){
                grid.classList.add('multiColor');
            }else{
                grid.classList.remove('multiColor');
                grid.style.backgroundColor = defaultColor;
            }

        })
    })
}