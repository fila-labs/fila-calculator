console.log("JS IS WORKING");

const button = document.querySelectorAll(".button");
const display = document.querySelector("#display");


button.forEach(function(button) {
    button.addEventListener("click", function() {
        const buttonText = button.textContent //this is for the if and else
        const displayText = display.textContent
        if (buttonText === "C"){
            display.textContent = "";
        } else if (buttonText === "="){
            try {
                const answer = new Function(`return ${displayText}`)();
                display.textContent = Number.isInteger(answer) ? answer : +answer.toFixed(4);
            } catch (error) {
                display.textContent = "Error";
            }
        } else if (buttonText === "DEL"){
            display.textContent = displayText.slice(0, -1);
        } else {
            if (display.textContent === "Error"){
                display.textContent = "";
            } display.textContent += button.textContent;
        }
    });
});
