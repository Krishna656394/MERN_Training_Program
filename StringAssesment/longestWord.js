// Q4. Write a JavaScript program that takes a string as input and returns the longest word in the string.
// If there are multiple longest words, return the first one.

const prompt = require("prompt-sync")();
const str = prompt("Enter a String : ");
let newStr = str.split(" ");
let idx = -1;
let maxLen = newStr[0].length;
for (let index = 0; index < newStr.length; index++) {
    if(newStr[index].length > maxLen){
        idx = index;
    }
}

console.log(`Longest Word in String is = ${newStr[idx]}`);
