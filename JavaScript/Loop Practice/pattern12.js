// Pattern 12
let prompt = require("prompt-sync")();
let n = Number(prompt("Enter N :"))

for(let i = 0; i < n ; i++){
    //star
    for(let j = 0; j <= i; j++){
        process.stdout.write("* ");
    }
    console.log();
}