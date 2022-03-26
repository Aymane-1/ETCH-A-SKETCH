let color = "white";
const modes = ["color", "rainbow", "eraser"];
let currentMode;
let DEFAULT_SIZE = 16;
const x = DEFAULT_SIZE;
const y = DEFAULT_SIZE;

const cont = document.getElementById("container");

function createGrid(DEFAULT_SIZE){
    for(let i = 0; i < DEFAULT_SIZE * DEFAULT_SIZE; i++){
        let box = document.createElement("div");
        box.innerHTML += '<div id="cell" height: 25px; width: 25px"></div>';   
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

function barValue(){
    let output = document.getElementById("slider").value;
    deleteGrid(output);
    createGrid(output);
}

function deleteGrid(){
    for(i = 0; i < DEFAULT_SIZE * DEFAULT_SIZE ; i++){
        cont.remove(childs[i]);
    }
    console.log(cont)
}

createGrid(DEFAULT_SIZE);
