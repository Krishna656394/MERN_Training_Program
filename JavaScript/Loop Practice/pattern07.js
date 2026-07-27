// 
let prompt = require("prompt-sync")();
let n = Number(prompt("Enter N :"))

for(let i = 0; i < n ; i++){
    //space
    for(let j = 0; j < (n-1-i) ; j++){
        process.stdout.write("  ");
    }
    
    //Number

    let num = i+1;
    for(let j = 0; j < (2 * i + 1); j++){
        process.stdout.write(num +" ");
        if(j < i){
            num--;
        }
        else{
            num++;
        }
    }
    
    //space
    for(let j = 0; j < (n - 1); j++){
        process.stdout.write(" ");
    }
    console.log();
}