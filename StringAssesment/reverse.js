// Q2. Write a JavaScript program to reverse a given string?
const prompt = require("prompt-sync")();
const str1 = prompt("Enter String : ");

str1 = str1.split("").reverse().join("");
console.log("Reverse String is = ", str1);
