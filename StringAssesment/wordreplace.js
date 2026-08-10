// Q13. Write a function replaceWord(originalString, targetWord, newWord)
// that replaces all occurrences of targetWord with newWord.

const prompt = require("prompt-sync")();
let originalString = prompt("Enter the original string:");
let targetWord = prompt("Enter the word to replace:");
let newWord = prompt("Enter the new word:");

function replaceWord(originalString, targetWord, newWord) {
    return originalString.replaceAll(targetWord, newWord);
}



let result = replaceWord(originalString, targetWord, newWord);

console.log("Result:", result);