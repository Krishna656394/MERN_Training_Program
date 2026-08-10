// Q17. Write a function containsWord(sentence, word)
// that returns true if sentence contains word.
// The search should be case-insensitive.

const prompt = require("prompt-sync")();

let sentence = prompt("Enter a sentence:");
let word = prompt("Enter the word to search:");

function containsWord(sentence, word) {
    return sentence.toLowerCase().includes(word.toLowerCase());
}



console.log("Result:", containsWord(sentence, word));