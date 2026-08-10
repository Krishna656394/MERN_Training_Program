// Q16. Write a function maskString(str) that takes a string
// of digits and replaces all but the last 4 characters with #.

const prompt = require("prompt-sync")();
let str = prompt("Enter a number:");


function maskString(str) {
    let result = "";

    
    for (let i = 0; i < str.length - 4; i++) {
        result += "#";
    }

    result += str.substring(str.length - 4);

    return result;
}

console.log("Masked string:", maskString(str));