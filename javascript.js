let gridTotal = 256;

for (i = 0; i < gridTotal; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "square";
    container.appendChild(newDiv);
}