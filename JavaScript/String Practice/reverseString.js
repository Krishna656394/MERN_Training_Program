// Q2. Write a JavaScript program to reverse a given string?

const prompt = require("prompt-sync")();
let str = prompt("Enter a String : ");

let reverseString = str.split("").reverse().join("");
console.log(`The Original String ${str} and the reverse ${reverseString}`);
