// Q6. Write a JavaScript program that takes a string as input and returns the string with the first letter of each word capitalized.

const prompt = require("prompt-sync")();
const str = prompt("Enter a String : ");

let words = str.split(" ");

let result = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
});

console.log(result.join(" "));