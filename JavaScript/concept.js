// var x = 20;
// var y = 30; 
// var z = 50;

// console.log("Result = ",sum);

// function add(x,y,z){
//     var sum = x + y + z;
//     return sum;
// }

// function sub(x, y){
//     return x - y;
// }

// function mul(x, y){
//     return x * y;
// }

// var result = add(2,5,8);
// console.log("Result = ",result);


var x = 4567;
var newNum = 0;
while(x > 0){
    d = x % 10;
    newNum = newNum * 10 + d;
    x = Math.floor(x / 10);
}

console.log(newNum % 10);

let num = 4567;
let firstDigit = num.toString()[0];

console.log(firstDigit); // "4"

var s = "cu"
s.charAt()
