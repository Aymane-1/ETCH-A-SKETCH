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
        box.classList.add("cell");
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
        childs[i].style.cssText = "background-color: darkgray";
    }
}

const colorPicker = document.getElementById("palette");

function defineMode(){
    const div = this;
    
    if(currentMode === modes[0]){
        div.addEventListener('mouseleave', event =>{
            div.style.backgroundColor = colorPicker.value;
        })
    }else if(currentMode === modes[1]){
        div.addEventListener('mouseleave', event =>{
            color = Math.floor(Math.random() * 16777215).toString(16);
            div.style.backgroundColor = '#' + color;
        })
    }else if(currentMode === modes[2]){
        div.addEventListener('mouseleave', event =>{
            div.style.backgroundColor = "darkgray";
        })
    }else
        div.style.backgroundColor = "black";
    
}

const display = document.getElementById("size");

function barValue(output){
    display.innerText = output + " x " + output;
    createnewGrid(output);
}

function createnewGrid(output){
    cont.innerHTML = "";
    cont.style.setProperty(
        "grid-template-columns",
        `repeat(${output}, 1fr)`);
    
    cont.style.setProperty(
        "grid-template-rows",
        `repeat(${output}, 1fr)`);
    
    for(let i = 0; i < output * output; i++){
        let box = document.createElement("div");
        box.classList.add("cell")
        box.addEventListener('mouseover', defineMode);
        cont.appendChild(box);
    }
}
    
createGrid(output);
