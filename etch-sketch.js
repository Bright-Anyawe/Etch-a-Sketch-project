const gridContainer = document.querySelector("#gridContainer");

for (i = 0; i < 16 * 16; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell')

    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = getRandomColor();
    });

    gridContainer.appendChild(cell);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createGrid(numSquares) {

    while (gridContainer.firstChild) {
        gridContainer.firstChild.remove();
    }
}















