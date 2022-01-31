var button = document.querySelector(".btn");
// var
// document
// querySelector
var bodysel = document.querySelector("body")
var color =["pink", "green", "violet", "orange", "gold"]
//배열방식

bodysel.style.backgroundColor="aquamarine"
button.addEventListener("click",changeColor)
// addEventListener
function changeColor(){
            // let
    let num= Math.floor(Math.random()*color.length);
    let colorSelect = color[num];
    console.log(colorSelect)
    

bodysel.style.backgroundColor=colorSelect


}