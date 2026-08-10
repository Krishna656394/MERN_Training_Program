// Q18. Write a JavaScript program that takes a string
// and a character, and removes all occurrences of that character.
const prompt = require("prompt-sync")();

let str = prompt("Enter a string:");
let ch = prompt("Enter the character to remove:");
function removeChar(str, ch) {
    let result = "";

    for (let i = 0; i < str.length; i++) {

        if (str[i] !== ch) {
            result += str[i];
        }
    }

    return result;
}



console.log("Result:", removeChar(str, ch));