// Pattern 01
let prompt = require("prompt-sync")();
let n = Number(prompt("Enter N :"))

for(let i = 0; i < n ; i++){
    for(let j = 0; j < n; j++){
        //star
        if(i == 0 || i == n-1 ){
            process.stdout.write("* ")
        }
        
        else if(j == 0 || j == n-1){
            process.stdout.write("* ")
        }

        else{
            process.stdout.write("  ")
        }
    }
    console.log();
}