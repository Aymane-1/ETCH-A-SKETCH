let color = "white";
let currentMode;
const output = document.getElementById("slider").value;
const modes = ["color", "rainbow", "eraser"];
const x = output;
const y = output;


const cont = document.getElementById("container");

function createGrid(output){
    for(let i = 0; i < output * output; i++){
        let box = document.createElement("div");
        box.innerHTML += '<div class="cell"></div>';   
        box.addEventListener('mouseover', defineMode);
        cont.appendChild(box);
    }
}

function colorMode(){
    currentMode = modes[0];
    defineMode();
}
function rainbowMode(){
    currentMode = modes[1];
    defineMode();
}
function eraserMode(){
    currentMode = modes[2];
    defineMode();
}

const childs = cont.childNodes;

function clearAll(){
    for(let i = 0;i < childs.length;i++){
        childs[i].style.cssText = "background-color: black";
    }
}

function defineMode(){
    const div = this;
    
    if(currentMode === modes[0]){
        div.addEventListener('mouseleave', event =>{
            div.style.backgroundColor = "red";
        })
    }else if(currentMode === modes[1]){
        div.addEventListener('mouseleave', event =>{
            color = Math.floor(Math.random() * 16777215).toString(16);
            div.style.backgroundColor = '#' + color;
        })
    }else if(currentMode === modes[2]){
        div.addEventListener('mouseleave', event =>{
            div.style.backgroundColor = "black";
        })
    }else
        div.style.backgroundColor = "white";

}


const display = document.getElementById("size");  

function barValue(){
    display.innerText = output + " x " + output;
    // deleteGrid(output);
}

function deleteGrid(output){
    for(i = 0; i < output * output ; i++){
        cont.remove(childs[i])
        console.log("here")
    }
    createGrid(output);
}

createGrid(output);
