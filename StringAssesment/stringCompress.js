// Q9. Write a function that compresses a string by replacing
// repeated characters with the number of repetitions.
// Example: "aaabbbccc" → "a3b3c3"

const prompt = require("prompt-sync")();
let str = prompt("Enter a string:");

function compressString(str) {
    let result = "";
    let count = 1;

    for (let i = 0; i < str.length; i++) {

        if (str[i] === str[i + 1]) {
            count++;
        } else {
            result += str[i] + count;
            count = 1;
        }
    }

    return result;
}
console.log("Compressed string:", compressString(str));