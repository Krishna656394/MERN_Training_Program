// Q11. Write a JavaScript program that takes a string and a character
// as input, and returns the position (index) of the first time
// that character appears. If it isn't found, return -1.

const prompt = require("prompt-sync")();
let str = prompt("Enter a string:");
let ch = prompt("Enter a character:");

let position = -1;

for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) {
        position = i;
        break;
    }
}

console.log("Position:", position);