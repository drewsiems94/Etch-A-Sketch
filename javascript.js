let gridTotal = 256;

for (i = 0; i < gridTotal; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "squares";
    container.appendChild(newDiv);
}

const squares = document.querySelectorAll('.squares');

squares.forEach(square => {
    square.addEventListener('mouseover', function changeColor () {
        square.setAttribute('style', 'background-color: black;');
    });
});

