document.addEventListener("DOMContentLoaded", function() {
    let inputElement = document.getElementById("textInput");
    let resultDiv = document.getElementById("result");

    inputElement.addEventListener("input", function() {
        resultDiv.innerHTML = "<p>" + inputElement.value + "</p>";
    });

    inputElement.addEventListener("input", function() {
        displayInput();
    });

    function displayInput() {
        resultDiv.innerHTML = "<p>" + inputElement.value + "</p>";
    }
});
