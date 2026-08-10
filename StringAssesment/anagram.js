// Q3. Write a JavaScript program to check if two given strings are anagrams of each other?
const prompt = require("prompt-sync")();
let str1 = prompt("Enter 1st String : ");
let str2 = prompt("Enter 2nd String :");

if(str1.length != str2.length){
    console.log(`${str2} is not an anagram of ${str1}`);
}

let str_1 = str1.split("").sort().join("");
let str_2 = str2.split("").sort().join("");

if(str_1 === str_2){
    console.log(`${str2} is an anagram of ${str1}`);
}
else{
    console.log(`${str2} is not an anagram of ${str1}`);
}