const display = document.querySelector("#numberDisplay");
const buttons = document.querySelectorAll(".button");
let isNumber;
let isOperator;
resultDisplayed = false;
display.value = '0';

function refreshCalculator() {
    isOperator = true;
    isNumber = true;
    display.value = "0"
}
refreshCalculator();

buttons.forEach(element => {
    element.addEventListener('click', e => {

        let buttonText = e.target.innerText;

        if (buttonText === "CANCEL") {
            refreshCalculator();
        }
        else if (buttonText === "." && canInsertDot(display.value)) {
            display.value += buttonText;
        }
        else if (buttonText === "+" && isOperator) {
            if (display.value != "0") { display.value += buttonText }
            else { display.value += buttonText; }
            isOperator = false;
            isNumber = true;
            resultDisplayed = false;

        }

        else if (buttonText === "-" && isOperator) {
            if (display.value != "0") { display.value += buttonText }
            else { display.value = buttonText; }
            isOperator = false;
            isNumber = true;
            resultDisplayed = false;

        }

        else if (buttonText === "/" && isOperator) {
            if (display.value != "0") { display.value += buttonText }
            else { display.value = buttonText }
            isOperator = false;
            isNumber = true;
            resultDisplayed = false;

        }
        else if (buttonText === "*" && isOperator) {
            if (display.value != "0") { display.value += buttonText }
            else { display.value = buttonText }
            isOperator = false;
            isNumber = true;
            resultDisplayed = false;

        }
        else if (buttonText === "=" && isOperator) {
            display.value = eval(display.value);
            resultDisplayed = true;
        }
        else if (buttonText >= "0" && buttonText <= 9 && isNumber && resultDisplayed === false) {
            if (buttonText === "0" && display.value === "0") {
                isNumber = true;
            }
            else if (display.value === "0") {
                display.value = buttonText;
            }
            else {
                display.value += buttonText;
            }
            isOperator = true;
            resultDisplayed = false;
        }
        else if (resultDisplayed === true) {
            refreshCalculator()
            resultDisplayed = false;
            display.value = buttonText;
        }
    })

})
function canInsertDot(expression) {
    for (i = 0; i < expression.length - 1; i++) {
        let character = expression.charAt(expression.length - 1 - i)

        if (character === ".") { return false }
        else if (i !== 0 && (character === "+" || character === "-" || character === "*" || character === "/")) { return true }
    }
    return true;
}