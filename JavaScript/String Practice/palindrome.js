// Q1. Write a JavaScript program to determine given string is a palindrome or not?

const prompt = require("prompt-sync")();
let str1 = prompt("Enter A String : ");
let temp = str1;
let str2 = temp.split("").reverse().join("");

if(str1 === str2){
    console.log(`String is a palindrome`);
}
else {
    console.log(`String is not a palindrome`);
}