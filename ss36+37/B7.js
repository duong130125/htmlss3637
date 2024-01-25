document.addEventListener("DOMContentLoaded", function() {
    let display = document.getElementById("demo");
    let buttons = document.querySelectorAll("button");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            handleButtonClick(button.innerText);
        });
    });

    function handleButtonClick(value) {
        switch (value) {
            case "=":
                evaluateExpression();
                break;
            case "AC":
                clearDisplay();
                break;
            default:
                updateDisplay(value);
                break;
        }
    }

    function updateDisplay(value) {
        display.value += value;
    }

    function evaluateExpression() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    }

    function clearDisplay() {
        display.value = "";
    }
});

