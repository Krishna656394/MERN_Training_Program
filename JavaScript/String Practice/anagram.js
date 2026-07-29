// Q3. Write a JavaScript program to check if two given strings are anagrams of each other?

const prompt = require("prompt-sync")();
let str1 = prompt("Enter 1st String : ");
let str2 = prompt("Enter 2nd String : ");

if(str1.length != str2.length){
    console.log("The String is Not Anagram");
}
else{
    str1 = str1.split("").sort().join("");
    str2 = str2.split("").sort().join("");
    if(str1 === str2){
        console.log(`String is anagram each other`);
    }
    else{
        console.log(`String is not anagram each other`);
    }
}