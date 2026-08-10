// Q1. Write a JavaScript program to determine given string is a palindrome or not?

const prompt = require("prompt-sync")();
const str1 = prompt("Enter String : ");
const str2 = str1.split("").reverse().join("");
if(str1 === str2){
    console.log(`${str1} is Palindrome`);
}
else{
    console.log(`${str1} is not Palindrome`);
}

