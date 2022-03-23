let cont = document.getElementById("container");
let numOfContainers = 16;
function createGrid(){
    for(let i = 0; i <= numOfContainers; i++)
        cont.innerHTML += `<div></div>`;
        console.log(i);

}

createGrid();