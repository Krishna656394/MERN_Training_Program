// Q6. Write a JavaScript program that takes a string as input and returns the string with the first letter of each word capitalized.

const prompt = require("prompt-sync")();
let str = prompt("Enter a String : ");

let newStr = str.split(" ");

for (let i = 0; i < newStr.length; i++) {
    let temp = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1);
    newStr[i] = temp;
}

str = newStr.join(" ");
console.log(str);
