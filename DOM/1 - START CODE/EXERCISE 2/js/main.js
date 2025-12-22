 

// Generate a random hexadecimal color
function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


// When clicking on the RANDOM COLOR button:
// -	Generate a random color
// -	Set the body background color with this color
// -	Set the color label with the value of this color


const clickbutton=document.querySelector("button");
const changeletter=document.getElementById("result-color");

clickbutton.addEventListener("click",function(){
    const changebackground=getRandomHexColor();
    document.body.style.backgroundColor=changebackground;
    changeletter.textContent=changebackground;

});



