// Q15. Write a function extractFirstN(str, n)
// that returns the first n characters of a string.
const prompt = require("prompt-sync")();

let str = prompt("Enter a string:");
let n = Number(prompt("Enter number of characters:"));
function extractFirstN(str, n) {
    return str.substring(0, n);
}


let result = extractFirstN(str, n);

console.log("Result:", result);