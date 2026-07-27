
// Pattern 18
let prompt = require("prompt-sync")();
let n = Number(prompt("Enter N :"))


for(let i = 0; i < 2 * n - 1 ; i++){
    let start ;
    if(i < n){
        start = i + 1;
    }
    else {
        start = 2 * n - i - 1;
    }

    // space 
    for(let j = 0; j < start-1; j++){
        process.stdout.write(" ");
    }
    // Numbers
    for (let j = start; j <= n; j++) {
        process.stdout.write(j + " ");
    }

    console.log();
}