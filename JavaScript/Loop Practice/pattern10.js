let prompt = require("prompt-sync")();
let n = Number(prompt("Enter N: "));

// Upper Half
for (let i = 1; i <= n; i++) {

    // Left Stars
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ");
    }

    // Middle Spaces
    for (let j = 1; j <= 2 * (n - i); j++) {
        process.stdout.write("  ");
    }

    // Right Stars
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ");
    }

    console.log();
}

// Lower Half
for (let i = n - 1; i >= 1; i--) {

    // Left Stars
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ");
    }

    // Middle Spaces
    for (let j = 1; j <= 2 * (n - i); j++) {
        process.stdout.write("  ");
    }

    // Right Stars
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ");
    }

    console.log();
}