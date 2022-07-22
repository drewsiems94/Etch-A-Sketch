

var gridWidth = '';
var gridTotal = 0;

const numSquares = document.getElementById('numSquares');
numSquares.addEventListener('click', function gridSize () {
    gridWidth = prompt("Please enter the number of squares: ");
    gridTotal = Number(gridWidth) * Number(gridWidth);
    //console.log(gridTotal);

    for (i = 0; i < gridTotal; i++) {
        const newDiv = document.createElement("div");
        newDiv.className = "squares";
        container.appendChild(newDiv);
    }

    //return nodelist containing references to all squares in the grid
    const squares = document.querySelectorAll('.squares');

    //for each square in our nodelist, add event listener
    //mouseover is the type of event, and changeColor is the function we want to call on event
    squares.forEach(square => {
        square.addEventListener('mouseover', function changeColor () {
            square.setAttribute('style', 'background-color: black;');
        });
    });
});





