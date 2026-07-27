
let prompt = require("prompt-sync")();
let n = Number(prompt("Enter N :"))

for(let i = 0; i < n ; i++){
    
    //star
    for(let j = 0; j <= i; j++){
        process.stdout.write(((i + j) % 2 === 0 ? "1 " : "0 "));
    }
    
    console.log();
}