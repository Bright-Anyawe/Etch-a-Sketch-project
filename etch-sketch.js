const divContainer = document.querySelector("#container");
const mainDiv = document.createElement('div');
mainDiv.classList.add('mainSide');
divContainer.appendChild(mainDiv);

mainDiv.addEventListener('mouseover', () => {
    mainDiv.style.backgroundColor = 'blue';
});

mainDiv.addEventListener('mouseout', () => {
    mainDiv.style.backgroundColor = '';
});

