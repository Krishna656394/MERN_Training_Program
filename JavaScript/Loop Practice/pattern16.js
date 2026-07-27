// Pattern 16
let prompt = require("prompt-sync")();
let n = Number(prompt("Enter N : "));

for (let i = 0; i < 2 * n - 1; i++) {

    // Upper Half
    if (i < n) {
        for (let j = 0; j < n - i; j++) {
            process.stdout.write("* ");
        }
    }

    // Lower Half
    else {
        for (let j = 0; j < i - n + 2; j++) {
            process.stdout.write("* ");
        }
    }

    console.log();
}