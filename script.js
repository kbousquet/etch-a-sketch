let canvas = document.getElementById("grid");
let r = document.querySelector(':root');

// Need to call the slider to use as input for createGrid function

// Need to also use the slider's number to change text next to the slider with the # x # canvas size.

// function that creates the grid canvas
function setUpGrid(num){
    num = num*num
    
    for(i=0;i<num;i++){
        let cell = document.createElement("div");
        cell.classList.add("cell");
        canvas.appendChild(cell);
    }
    
}

// change the css variable responsible for grid size
function adjustGridSize(size) {
    r.style.setProperty("--grid-size", size);
}

function generateGrid(num){
    setUpGrid(num);
    adjustGridSize(num);
}

// Need to call the slider to use as input for createGrid function

// Need to also use the slider's number to change text next to the slider with the # x # canvas size.


generateGrid(16);