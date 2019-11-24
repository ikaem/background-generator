// we want to be able to change the color
// we also want to be able to print color code

// we want to read colors of both inputs
/* lets select both inputs */
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
/* lets select body element to be able to change bacgorund color */
var body = document.querySelector("#gradient");



/* lets select h3, so we can print color there */
var css = document.querySelector("h3");

/* lets dry the code */
function coloring(){
    /* now we change backgroind color1 to color1.value */
    body.style.background = "linear-gradient(to right, " +  color1.value + ", " + color2.value + ")";;
    //linear-gradient(to right, red, orange)
    css.textContent = "Color 1: " + color1.value + " Color 2: " + color2.value;
}

/* now we want to listen to an event when color1 is changed */
/* this one will be event when input value changes */
/* 'input' event is cool because it listens for change in input */
color1.addEventListener("input", coloring);
color2.addEventListener("input", coloring);

// background is in the body tag

/* select button */
/* create function to create random colors */
/* assign random colors to variables */
/* create event listener */
/* assign those colors to color.values */
/* assign same colors to value of background */

var randomButton = document.querySelector(".randomButton");

function randomColor(){
    var color = "#";
    var hex = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
    for(let i=0; i < 6; i++){
        color = color + hex[Math.floor(Math.random()*16)];
    }
    return color;
}

randomButton.addEventListener("click", function(){
    color1.value = randomColor();
    color2.value = randomColor();
    coloring();
})


