const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "white";
const x = DEFAULT_SIZE;
const y = DEFAULT_SIZE;

const cont = document.getElementById("container");

function createGrid(){
    for(let i = 0; i < x * y; i++){
        const box = document.createElement("div");
        box.className = "cell"
        box.innerHTML += '<div height: 25px; width: 25px"></div>';   
        box.addEventListener('mouseover', setColor);
        cont.appendChild(box);
    }
}

function setColor(box){
    box.target.style.backgroundColor = DEFAULT_COLOR;
    box.target.style.cursor = "cell";
}
    
function eraser(box){
    box.target.style.backgroundColor = "black";
}

createGrid();
// setColor();