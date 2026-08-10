// Q20. Write a JavaScript program that converts
// uppercase letters to lowercase and lowercase letters to uppercase.
const prompt = require("prompt-sync")();
let str = prompt("Enter a string:");

let result = "";

for (let i = 0; i < str.length; i++) {

    let ch = str[i];

    if (ch >= 'A' && ch <= 'Z') {

        result += ch.toLowerCase();
    } 
    else if (ch >= 'a' && ch <= 'z') {
        
        result += ch.toUpperCase();
    } 
    else {
        result += ch;
    }
}

console.log("Toggled string:", result);