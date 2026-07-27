// Pattern 19
let prompt = require("prompt-sync")();
let n = Number(prompt("Enter N : "));

for (let i = 0; i < n; i++) {

    // Spaces
    for (let j = 0; j < i; j++) {
        process.stdout.write(" ");
    }

    // Stars
    for (let j = 0; j < n - i; j++) {

        if (j == 0 || j == n - i - 1 || i == 0)
            process.stdout.write("* ");
        else
            process.stdout.write("  ");
    }
    console.log();
}
