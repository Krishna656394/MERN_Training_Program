//.........Class 29.........
// Arrow Function.
// Syntax : type var_name = ()=> {};


// let learning = (a, b) => a + b;
// console.log(learning(4, 4));

// IIFI function (Immediately invoked function expression)
// it run automatecally when it is near to the expression
//syntax ->

// (function (a , b){
//     let sum = a+b;
//     console.log("Hello World " +sum);
// })(4,6);

function first(){
    console.log("first");
    second();
    console.log("Again First");
    
}

function second(){
    console.log("Second");
    third();
    console.log("Again third");
    
}

function third(){
    console.log("Third");
}

first();