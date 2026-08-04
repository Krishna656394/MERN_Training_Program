const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

const add = document.getElementById("add");
const sub = document.getElementById("sub");
const mul = document.getElementById("mul");
const divi = document.getElementById("divi");
const mod = document.getElementById("mod");
const cls = document.getElementById("cls");

const result = document.getElementById("result");

// Addition Function.
function adding() {
    
    const num1 = input1.value;
    const num2 = input2.value;
    
    result.innerText = Number(num1) + Number(num2);
}

// Subtraction Function.
function subtract() {
    
    const num1 = input1.value;
    const num2 = input2.value;
    
    result.innerText = Number(num1) - Number(num2);
}

// Multiply Function
function multiply() {
    
    const num1 = input1.value;
    const num2 = input2.value;
    
    result.innerText = Number(num1) * Number(num2);
}

//Division Function
function division() {
    
    const num1 = input1.value;
    const num2 = input2.value;

    if(Number(num2) == 0){
        result.textContent = "Number is Not Divisible by 0";
    }
    else{
        result.innerText = Number(num1) / Number(num2);
    }
}

//Modulus Function
function modulus() {
    return result.textContent = Number(input1.value) % Number(input2.value);
}

//Clear Function
function clear(){
    return result.textContent = ("");
}


add.addEventListener("click", adding);
sub.addEventListener("click", subtract);
mul.addEventListener("click", multiply);
divi.addEventListener("click", division);
mod.addEventListener("click", modulus);
cls.addEventListener("click", clear);
