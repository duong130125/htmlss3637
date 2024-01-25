let input = document.getElementById("input");
let button = document.getElementById("click");
let ul = document.getElementById("list");
input.style.backgroundColor = "#ffec99";
input.addEventListener("input", function () {
    let inputValue = input.value.trim();
    if (inputValue !== "") {
        input.style.backgroundColor = "white";
    } else {
        input.style.backgroundColor = "#ffec99";
    }
});

button.onclick = function () {
    let inputValue = input.value.trim();
    if (inputValue !== "") {
        let item = document.createElement("li");
        item.innerHTML = inputValue;
        ul.appendChild(item);
        input.value = "";
        input.style.backgroundColor = "#ffec99"; 
    }
};
