// Write a JavaScript program that takes a string as input and returns the number of words in the string.

const prompt = require("prompt-sync")();
let str = prompt("Enter a String : ");

let newStr = str.split(' ');

let count = 0;

for(let i = 0; i < newStr.length; i++){
    count++;
}
console.log("Total Words = "+count);