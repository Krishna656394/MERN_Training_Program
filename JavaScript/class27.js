
// let x = 35;
// console.log(x);

// function abc(x){
//     "use strict";
//     let a  = "Hello World"
//     return a;
// }
// console.log(abc());


//________String in JS___________
//in js string is mutable. 

// let str1 = "Krishna Yadav";
// let str2 = "Kumar";

// console.log(str1 + str2);
// console.log(str1.length);

// let str = 397
// console.log(`Hello Number ${str}`); // string literal.

// let name = new String("Krishna Yadav");
// console.log(name);


// Program Palindrome
// let palin = "MADAM";
// let reverseStr = palin.split("").reverse().join("");

// if(palin === reverseStr){
//     console.log(`String is Palindrome`);
// }
// else{
//     console.log("String is not palindrome");
// }

//  Write a program to check a string anagram or not.
let str1 = "night";
let str2 = "thing";

function checkAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        console.log("Not Anagram");
        return;
    }

    let s1 = str1.split("").sort().join("");
    let s2 = str2.split("").sort().join("");

    if (s1 === s2) {
        console.log("Anagram");
    } else {
        console.log("Not Anagram");
    }
}

checkAnagram(str1, str2);





