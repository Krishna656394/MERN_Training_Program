// Q4. Write a JavaScript program that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one.
const prompt = require("prompt-sync")();
let str = prompt("Enter a String : ");

let newStr = str.split(' ');

let len = 0;
let idx ;
for(let i = 0; i < newStr.length; i++){
    if(len < newStr[i].length){
        len = newStr[i].length;
        idx = i;
    }
}
console.log(newStr[idx]);
