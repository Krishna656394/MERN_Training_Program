const prompt = require("prompt-sync")();
const num = Number(prompt("Enter Number : "));

function squre(num){
    return num * num;
}

console.log(squre(num));
