document.addEventListener("DOMContentLoaded", function() {
    let number1Input = document.getElementById("number1");
    let number2Input = document.getElementById("number2");
    let resultInput = document.getElementById("result");

    number1Input.addEventListener("input", updateSum);
    number2Input.addEventListener("input", updateSum);

    function updateSum() {
        let number1 = parseFloat(number1Input.value) || 0;
        let number2 = parseFloat(number2Input.value) || 0;
        let sum = number1 + number2;

        resultInput.value = sum;
    }

    let calculateButton = document.createElement("button");
    calculateButton.textContent = "Tính tổng";
    calculateButton.addEventListener("click", function() {
        let number1 = parseFloat(number1Input.value) || 0;
        let number2 = parseFloat(number2Input.value) || 0;
        let sum = number1 + number2;

        resultInput.value = sum;
    });

    document.body.appendChild(calculateButton);
});
