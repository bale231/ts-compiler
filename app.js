document.addEventListener("DOMContentLoaded", function () {
    var inputN1 = document.getElementById("n1");
    var inputN2 = document.getElementById("n2");
    var button = document.getElementById("add");
    var result = document.getElementById("result");
    if (!inputN1 || !inputN2 || !button || !result) {
        console.error("Uno o più elementi non esistono nel DOM.");
        return;
    }
    function add(n1, n2) {
        return n1 + n2;
    }
    function printResult(num) {
        result.innerHTML = "Result is: <span class=\"fw-bold num-result\">".concat(num, "</span>.");
    }
    button.addEventListener("click", function () {
        var inputValue1 = Number(inputN1.value.trim());
        var inputValue2 = Number(inputN2.value.trim());
        if (isNaN(inputValue1) || isNaN(inputValue2)) {
            alert("Inserisci numeri validi!");
            return;
        }
        printResult(add(inputValue1, inputValue2));
    });
});
