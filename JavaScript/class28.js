


// function mah(...numbers){
//     return numbers.reduce((a,b)=> a + b , 0)
// }

// console.log(mah(4,8,2,0,1,4,9))


// Write a program to count vowel.

// const prompt = require("prompt-sync")();
// let word = prompt("Enter Word : ");
// let count = 0;
// function hello(word){

//     let arr = word.toLowerCase().split("");
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u'){
//             count++;
//         }
//     }
//     return count;
// }

// let total = hello(word);
// console.log(`Total Vowel is ${total}`);


// Call By Function............

//A callback function is a function that is passed as an argument to another function and is executed later, usually after a task is completed or when an event occurs.


// function greeting(hello, callb){
//     let processed = hello.toLowerCase();
//     console.log(processed);
//     console.log(callb());
// }

// function callb(){
//     return "HEllo World";
// }

// greeting("RAMAYA", callb);

// Pure Function..................
// ye basically kuch n kuch value return karta hai , output predict kiya ja sakta hai

// A pure function always follows these two rules:

// Same input → Same output
// It does not change anything outside the function (no side effects).
// function pure(a, b){
//     return a + b ;
// }
// let x = pure(3, 5);
// console.log(x);

//  Impure Function

// An impure function either:

// Changes an external variable, or
// Depends on something outside the function.

// let count = 0;

// function increment() {
//     count++;
// }

// increment();
// increment();

// console.log(count); // 2


function newFun(number){
    return function nayafun(factor){
        console.log(number * factor);
    }
}
newFun(3)(4);
