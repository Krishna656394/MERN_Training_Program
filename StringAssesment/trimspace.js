// Q14. Write a JavaScript function that takes a string
// with leading and trailing spaces and removes those spaces.
const prompt = require("prompt-sync")();

let str = prompt("Enter a string:");

function removeWhitespace(str) {
    return str.trim();
}



let result = removeWhitespace(str);

console.log("After removing extra spaces:", result);