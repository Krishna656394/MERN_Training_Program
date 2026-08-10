// Q8. Write a JavaScript program that takes two strings as input
// and returns the number of times the second string occurs
// as a substring in the first string.
const prompt = require("prompt-sync")();
const str = prompt("Enter the first string:");
let subStr = prompt("Enter the substring:");

let count = 0;

for (let i = 0; i <= str.length - subStr.length; i++) {
    if (str.substring(i, i + subStr.length) === subStr) {
        count++;
    }
}

console.log("Number of occurrences:", count);