// Q25. Simple Password Validator
// Password must:
// 1. Be at least 8 characters long.
// 2. Not contain any blank spaces.

const prompt = require("prompt-sync")();

function isPasswordValid(password) {

    if (password.length < 8) {
        return false;
    }

    
    if (password.includes(" ")) {
        return false;
    }

    return true;
}

let password = prompt("Enter your password:");

console.log("Password valid:", isPasswordValid(password));