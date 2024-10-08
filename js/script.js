createGrid();

const grids = document.querySelectorAll('.box');

grids.forEach((grid) => {
    grid.addEventListener('mouseenter', () => {
        grid.style.backgroundColor='black'
    })
})


function createGrid(){
    const gridContainer = document.querySelector('.grid-container');

    for(j=1;j<16;j++){
        let container = document.createElement('div');
        container.className = 'container';
        gridContainer.appendChild(container);
        for(i=1;i<16;i++){
            let box = document.createElement('div');
            container.appendChild(box);
            box.className='box';
        }
    }
}