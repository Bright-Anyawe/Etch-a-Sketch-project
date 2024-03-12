const gridContainer = document.querySelector("#gridContainer");

for (i = 0; i < 16 * 16; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell')

    gridContainer.appendChild(cell);
}














/*const mainDiv = document.createElement('div');
mainDiv.classList.add('mainSide');
divContainer.appendChild(mainDiv);*/

/*mainDiv.addEventListener('mouseover', () => {
    mainDiv.style.backgroundColor = 'purple';
});

mainDiv.addEventListener('mouseout', () => {
    mainDiv.style.backgroundColor = '';
});*/

