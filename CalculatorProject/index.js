const display = document.getElementById("textBox");
const buttons = document.querySelectorAll(".item");

buttons.forEach(button =>{
    button.addEventListener("click", ()=>{
        const buttonText = button.innerText;

        if(button.id === "back"){
            display.value = display.value.slice(0, -1);
            return;
        }

        if (button.id === "equal") {
            try {
                let expression = display.value.replace(/×/g, "*");

                if (expression.includes("/0")) {
                    display.value = "Cannot divide by zero";
                    return; 
                }

                if (expression.includes("%0")) {
                    display.value = "Result is undefined";
                    return;
                }

                display.value = eval(expression);

            } catch (error) {
                display.value = "Error";
            }
            return;
        }

        appendValue(buttonText);
    });
});

function appendValue(input) {
    if (display.value === "" && isNaN(input) && input !== "(" && input !== "-") {
        return; 
    }
    display.value += input;
}







