let canvas = document.getElementById("grid");
let r = document.querySelector(':root');
let currentSize = 25;
let rainbowColor = '#'+Math.floor(Math.random()*16777215).toString(16);
const clearButton = document.querySelector('.clear-button');
const blackWhiteButton = document.querySelector('.blackWhite-button');
const rbgButton = document.querySelector('.RBG-button');
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
        

        blackWhiteButton.addEventListener('click', () => {
            cell.addEventListener('mouseover', 
                e => e.target.classList.add('black-color'));
        });

        blackWhiteButton.addEventListener('click', () => {
            cell.addEventListener('mouseover', 
                e => e.target.classList.remove('rainbow-color'));
        });

        /*rbgButton.addEventListener('click', () => {
            cell.addEventListener('mouseover', 
                r.style.setProperty("--rainbow-color", rainbowColor));
        });

        rbgButton.addEventListener('click', () => {
            cell.addEventListener('mouseover', 
                e => e.target.classList.remove('black-color'));
        });
        */
        eraserButton.addEventListener('click', () => {
            cell.addEventListener('mouseover', 
                e => e.target.classList.remove('black-color','rainbow-color'));
        }); 
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



clearButton.addEventListener('click', () => {
    reloadGrid();
});

function clearCanvas(){
    grid.innerHTML = ""
}

window.onload = () => {
    generateGrid(currentSize);    
  }