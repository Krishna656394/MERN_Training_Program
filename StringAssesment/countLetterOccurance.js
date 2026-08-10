// Q10. Write a JavaScript program that counts the occurrences
// of each letter in a given string.

const prompt = require("prompt-sync")();
let str = prompt("Enter a string:");

let frequency = {};

for (let i = 0; i < str.length; i++) {

    let ch = str[i].toLowerCase();

    // Ignore spaces
    if (ch === " ") {
        continue;
    }

    if (frequency[ch] === undefined) {
        frequency[ch] = 1;
    } else {
        frequency[ch]++;
    }
}

console.log("Character occurrences:");

for (let ch in frequency) {
    console.log(ch + " : " + frequency[ch]);
}