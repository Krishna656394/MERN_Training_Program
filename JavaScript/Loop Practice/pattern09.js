let prompt = require("prompt-sync")();
let n = Number(prompt("Enter N: "));

for (let i = 0; i < 2 * n - 1; i++) {

    let stars;
    let spaces;

    if (i < n) {
        // Upper half
        stars = i + 1;
        spaces = n - i - 1;
    } else {
        // Lower half
        stars = 2 * n - i - 1;
        spaces = i - n + 1;
    }

    // Print spaces
    for (let j = 0; j < spaces; j++) {
        process.stdout.write(" ");
    }

    // Print stars
    for (let j = 0; j < stars; j++) {
        process.stdout.write("* ");
    }

    console.log();
}