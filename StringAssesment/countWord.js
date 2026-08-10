// Q5. Write a JavaScript program that takes a string as input and returns the number of words in the string.

const prompt = require("prompt-sync")();
const str = prompt("Enter a String : ");
let newStr = str.split(" ");
let count = 0;
for (let index = 0; index < newStr.length; index++) {
    count++;
}

console.log(`Total Word in String is = ${count}`);