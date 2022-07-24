

var gridWidth = '';
var gridTotal = 0;
var colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];



const numSquares = document.getElementById('numSquares');
numSquares.addEventListener('click', makeGrid);

const trippy = document.getElementById('trippy');
trippy.addEventListener('click', makeColorGrid);

function makeGrid() {

    const container = document.querySelector('#container');
    removeAllChildNodes(container);

    gridWidth = parseInt(prompt("Enter the number of squares (1 to 100): "));
    while (gridWidth < 1 || gridWidth > 100) {
        gridWidth = parseInt(prompt("Enter a new number (1 to 100): "));
    }
    
    gridTotal = gridWidth * gridWidth;

    for (i = 0; i < gridTotal; i++) {
        const newDiv = document.createElement("div");
        newDiv.className = "squares";
        container.appendChild(newDiv);
    }

    container.style.cssText = `grid-template-columns: repeat(${gridWidth}, ${500 / gridWidth}px)`;
    
    //return nodelist containing references to all squares in the grid
    const squares = document.querySelectorAll('.squares');

    //for each square in our nodelist, add event listener
    //mouseover is the type of event, and changeColor is the function we want to call on event
    squares.forEach(square => {
        square.addEventListener('mouseover', function changeColor () {
            square.setAttribute('style', 'background-color: black;');
        });
    });
}

function makeColorGrid() {

    const container = document.querySelector('#container');
    removeAllChildNodes(container);

    gridWidth = parseInt(prompt("Enter the number of squares (1 to 100): "));
    while (gridWidth < 1 || gridWidth > 100) {
        gridWidth = parseInt(prompt("Enter a new number (1 to 100): "));
    }
    
    gridTotal = gridWidth * gridWidth;

    for (i = 0; i < gridTotal; i++) {
        const newDiv = document.createElement("div");
        newDiv.className = "squares";
        container.appendChild(newDiv);
    }

    container.style.cssText = `grid-template-columns: repeat(${gridWidth}, ${500 / gridWidth}px)`;
    
    //return nodelist containing references to all squares in the grid
    const squares = document.querySelectorAll('.squares');

    //for each square in our nodelist, add event listener
    //mouseover is the type of event, and changeColor is the function we want to call on event
    squares.forEach(square => {
        square.addEventListener('mouseover', function changeColor () {
            square.style.backgroundColor = randomColor();
        });
    });
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function randomColor() {
    const randColor = colors[Math.floor(Math.random() * colors.length)];
    return randColor;
}