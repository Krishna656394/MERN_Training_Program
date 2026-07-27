
let prompt = require("prompt-sync")();
let n = Number(prompt("Enter N :"))

for(let i = 0; i < n ; i++){
    
    //star
    for(let j = 0; j < n - i; j++){
        process.stdout.write(j+1 +" ");
    }
    
    console.log();
}