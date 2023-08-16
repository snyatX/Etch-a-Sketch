// Just adds the html elements to the DOM
const gridEl = document.getElementById("grid");
const resetBtn = document.getElementById("resetBtn")
const inputFieldEl = document.getElementById("inputFieldEl")
const submitBtnEl = document.getElementById("submitBtn")
const colorPicker = document.getElementById("colorPicker")


// creates the grid
function createGrid(rows, cols){

  for (let i = 0; i < rows * cols; i++){
    let gridElement = document.createElement("div");

    // sets the sizes of each individual grid element
    let gridElementSizes = 500 / rows
    gridElement.style.height = `${gridElementSizes}px`;
    gridElement.style.width = `${gridElementSizes}px`;
    gridElement.style.backgroundColor = "white";

    // changes the color of the grid element when the mouse hovers over it
    gridElement.addEventListener("mouseover", function(event){
      if (eraser.checked === true){
        event.target.style.backgroundColor = "white" 
      } else if (colorRandomizer.checked === true){
        event.target.style.backgroundColor = `#${randomizeColor()}`
      } else        
      {
      event.target.style.backgroundColor = colorPicker.value;
      }
    })
    


  

    // appends the gridElements in the for loop to the actual grid
    gridEl.appendChild(gridElement);

  }
}
// the default size of the pixels on the grid
createGrid(16, 16)

// a function that changes the size of the div boxes once a button is clicked
function changePixelSize(){
  gridEl.innerHTML = ''
  let pixelSize = inputFieldEl.value;
  console.log(pixelSize)
  createGrid(pixelSize, pixelSize)  
  if (inputFieldEl.value === ''){
    createGrid(16, 16)
  }
}

function randomizeColor(){
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  return randomColor
}
function eraseGrid(){
  return "white"
}




