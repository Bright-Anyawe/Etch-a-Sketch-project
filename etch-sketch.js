const gridContainer = document.querySelector("#gridContainer");

for (i = 0; i < 16 * 16; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell')

    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = getRandomColor();
    });

    gridContainer.appendChild(cell);


}


















