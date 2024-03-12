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

    const cellwidth = `${960 / numSquares}px`;

    for (i = 0; i < numSquares * numSquares; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = cellwidth;
        cell.style.height = cellwidth;

        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = getRandomColor();
        });

        gridContainer.appendChild(cell);
    }
}

function handleButtonClick() {

    const numSquares = prompt('Enter number of squares per side:')

    if (numSquares !== null && numSquares !== '') {
        const parsedNumSquares = parseInt(numSquares);

        if (!isNaN(parsedNumSquares) && parsedNumSquares > 0 && parsedNumSquares <= 100) {
            createGrid(parsedNumSquares);
        }
        else {
            alert('Invalid Input. Please enter a positive number up to 100')
        }

    }
}
createGrid(16);

const button = document.createElement('button');
button.textContent = 'Create a new Grid';
button.addEventListener('click', handleButtonClick);

document.body.insertBefore(button,document.body.firstChild )














