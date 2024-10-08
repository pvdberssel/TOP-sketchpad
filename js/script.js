createGrid(20);
let defaultColor = 'black';
loadGrid();
const resizeButton = document.querySelector('.resize');



resizeButton.addEventListener('click', () => {
    numberGrid=Number(prompt('How many squares per row and column?'));
    
    while(numberGrid < 1 || numberGrid > 70){
        numberGrid=Number(prompt('Make sure the value is larger than 0 and smaller than 70'));
    }

    removeGrid();
    createGrid(numberGrid);
    loadGrid();
})

const colorButton = document.querySelectorAll('.color')
colorButton.forEach((button) => {
    button.addEventListener('click', () => {
  
        defaultColor=button.classList[0];
        loadGrid()
    })
})

function createGrid(amount){
    const gridContainer = document.querySelector('.grid-container');

    for(j=1;j<=amount;j++){
        let container = document.createElement('div');
        container.className = 'container';
        gridContainer.appendChild(container);
        for(i=1;i<=amount;i++){
            let box = document.createElement('div');
            container.appendChild(box);
            box.className='box';
        }
    }
}

function removeGrid(){
    const gridContainer = document.querySelector('.grid-container');
    for(i= gridContainer.childNodes.length - 1; i > -1; i--){
        gridContainer.removeChild(gridContainer.childNodes[i])
    }
}

function loadGrid(){
    const grids = document.querySelectorAll('.box');
    

    grids.forEach((grid) => {
        grid.addEventListener('mouseenter', () => {
            grid.style.backgroundColor=defaultColor;
           
        })
    })
}