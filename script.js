let canvas = document.getElementById("grid");
let r = document.querySelector(':root');
let currentSize = 25;
const clearButton = document.querySelector('.clear-button');
const blackWhiteButton = document.querySelector('.blackWhite-button');
const rbgButton = document.querySelector('.rbg-button');
const eraserButton = document.querySelector('.eraser-button');


// Call the slider to use as input for generateGrid function
const sizeSlider = document.getElementById('sizeSlider');
const sizeValue = document.querySelector('.size-value');

sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSlider.onchange = (e) => changeSize(e.target.value)

function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`
  }

function changeSize(value) {
    setCurrentSize(value)
    reloadGrid()
}

function reloadGrid() {
    clearCanvas()
    generateGrid(currentSize)
  }
  
  function setCurrentSize(value) {
    currentSize = value;
  }

// Create the grid cells based on input size
function setUpGrid(currentSize){
    num = currentSize*currentSize
    
    for(i=0;i<num;i++){
        let cell = document.createElement("div");
        cell.classList.add("cell");
        canvas.appendChild(cell);
    }
}

// Change the css variable responsible for grid size
function adjustGridSize(size) {
    r.style.setProperty("--grid-size", size);
}

// Generate a blank canvas, defaulted to 25 x 25
function generateGrid(num){
    setUpGrid(num);
    adjustGridSize(num);
}


// Add multiple ways to refresh the canvas
function clearCanvas(){
    grid.innerHTML = ""
}

clearButton.addEventListener('click', () => {
    window.location.reload();
});

window.onload = () => {
    generateGrid(currentSize);    
  }