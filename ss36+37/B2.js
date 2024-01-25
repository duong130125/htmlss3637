let myButton = document.getElementById("Button");
let buttonClicked = false;
myButton.onclick = function(){
    if (buttonClicked) {
        myButton.textContent = "OFF";
    } else {
        myButton.textContent = "ON";
    }
    buttonClicked = !buttonClicked;
}
