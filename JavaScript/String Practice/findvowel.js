// Q7. Write a JavaScript program that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.

const prompt = require("prompt-sync")();
let word = prompt("Enter Word : ");
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