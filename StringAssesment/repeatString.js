// Q19. Write a function repeatString(str, count)
// that returns the string repeated count times.
const prompt = require("prompt-sync")();

let str = prompt("Enter a string:");
let count = Number(prompt("Enter the number of repetitions:"));
function repeatString(str, count) {
    let result = "";

    for (let i = 0; i < count; i++) {
        result += str;
    }

    return result;
}



console.log("Result:", repeatString(str, count));