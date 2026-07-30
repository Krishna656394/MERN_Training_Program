//  Q9. Write a function that compresses a string by replacing repeated characters with the number of repetitions.
//  For example, “aaabbbccc” should become “a3b3c3”.

const prompt = require("prompt-sync")();
let str = prompt("Enter String : ");

function compress(str){
    let i = 0;
    let newStr = "";
    while(i < str.length){
        let ch = str.charAt(i);
        let count = 0;

        let j = i;
        while(j < str.length && str.charAt(j) == ch){
            count++;
            j++;
        }

        newStr += ch + count;
        i = j; 
    }
    console.log(newStr);
}
compress(str);

