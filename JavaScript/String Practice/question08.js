// Q8. Write a JavaScript program that takes two strings as input and returns the number of times the second string occurs as a substring in the first string.

const prompt = require("prompt-sync")();
let word = prompt("Enter String : ");
let temp = prompt("Enter anoter Stin/")
let count = 0;
function hello(word){

    let arr = word.toLowerCase().split("");
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u'){
            count++;
        }
    }
    return count;
}