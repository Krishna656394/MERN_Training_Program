// Pattern 01
let prompt = require("prompt-sync")();
let n = Number(prompt("Enter N :"))

for(let i = 0; i < n ; i++){
    //space
    for(let j = 0; j < (n - i - 1); j++){
        process.stdout.write(" ");
    }
    
    //star
    for(let j = 0; j <= i; j++){
        process.stdout.write(i+1 +" ");
    }
    
    //space
    for(let j = 0; j < (n - i - 1); j++){
        process.stdout.write(" ");
    }
    console.log();
}