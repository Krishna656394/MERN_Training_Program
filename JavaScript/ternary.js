// For take input from terminal.
const prompt = require("prompt-sync")();

//Exercise 1: Pass ya Fail?
let marks = Number(prompt("Enter Marks : "));

let result = (marks >= 40) ? "Pass ": "Fail";

console.log(result);

// Exercise 2: Even ya Odd Number?

let num = Number(prompt("Enter Number : "))
let evenOdd = (num % 2 == 0)? "Even" : "Odd";
console.log(evenOdd);

// Exercise 3: Driving License Eligibility

let age = Number(prompt("Enter Age : "))
let message = (age >= 18) ? "Eligible to drive" : "Not eligible to drive";
console.log(message);

// Exercise 4: Discount Checker ?
let totalAmount = Number(prompt("Enter Total Amount : "))

let discount = (totalAmount > 1000) ? (totalAmount - 1000) : 0 ;

console.log(discount);

// Exercise 5: Day Time Greeting

let hour = Number(prompt("Enter Hour : "));
let greeting = (hour < 12) ? "Good Morning" : "Good Day";

console.log(greeting);

// Exercise 6 : Game Score High Alert
let score = Number(prompt("Enter Number : "));
let isHighScore = (score > 90) ? true : false;
console.log(isHighScore);

// Exercise 7: Weather Advice
let isRaining = Boolean(prompt("Enter Yes or No like (true or false : "));
let action = (isRaining) ? "Take an umbrella" : "Enjoy the sun";
console.log(action);

// Exercise 8: Speed Limit Warning

let speed = Number(prompt("Enter Speed "));
let status = (speed > 40) ? "Over-speeding!" :"Normal speed";
console.log(status);

// Exercise 9: Login Check
let isLoggedIn = Boolean(prompt("Enter True or False : "));
let buttonText = (isLoggedIn) ? "Logout" : "Login";
console.log(buttonText);

// Exercise 10: Bigger Number Finder (2 Numbers)
let num1 = Number(prompt("Enter Number1 : "));
let num2 = Number(prompt("Enter Number2 : "));

let max = (num1 > num2) ? num1 : num2;

console.log(max);














