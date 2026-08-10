// Q12. Write a function checkEnding(str, target)
// that checks if a string ends with the given target substring.

const prompt = require("prompt-sync")();
let str = prompt("Enter a string:");
let target = prompt("Enter the target:");

function checkEnding(str, target) {
    return str.endsWith(target);
}


function checkEndingWithoutBuiltIn(str, target) {

    if (target.length > str.length) {
        return false;
    }

    let start = str.length - target.length;

    return str.substring(start) === target;
}

console.log(checkEnding(str, target));

console.log(checkEndingWithoutBuiltIn(str, target));