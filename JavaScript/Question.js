// Write a program that determines whether a given number is positive or negative.

const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number: "));

if(num > 0){
    console.log("Positive");
}
else if(num < 0){
    console.log("Negative");
}
else{
    console.log("Zero");
}


//Write a program that checks if a number is even or odd.

let num_1 = Number(prompt("Enter a number: "));

if(num_1 % 2 == 0){
      console.log("Number is Even");
}
else{
    console.log("Number is Odd");
    
}

//Write a program to determine the greater of two numbers.

let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));

if(num1 > num2){
    console.log(num1 + " is Greater");
}
else if(num2 > num1){
    console.log(num2 + " is Greater");
}
else{
    console.log("Both numbers are equal");
}

//Write a program that transforms a numerical grade to a letter grade (e.g., grade 10 should display “A”).


let grade = Number(prompt("Enter Grade like 10 : "));

if(grade == 10){
    console.log("Grade - A");
}
else if (grade == 20) {
    console.log("Grade - A+");
}
else{
    console.log("Grade - A++");
}

//- Write a program that calculates the ticket price based on age with the following conditions:
    // - Age below 12 → ticket price = 5
    // - Age below 18 → ticket price = 10
    // - Age below 60 → ticket price = 20
    // - Age over 60 → ticket price = 15

    
let age = Number(prompt("Enter Age : "));
let noOf_Ticket = Number(prompt("Enter No of Tickets : "));
    
if(age < 12){
    console.log("Price of Tickets = "+ 5 * noOf_Ticket);
}
else if(age < 18){
    console.log("Price of Tickets = "+ 10* noOf_Ticket);
}
else if(age < 60){
    console.log("Price of Tickets = "+ 20* noOf_Ticket);
}
else{
    console.log("Price of Tickets = "+ 15* noOf_Ticket);
}


//Write a program that determines if a year is a leap year.

let year = Number(prompt("Enter Year : "))
if((year % 400 == 0) || (year % 4 == 0 != year % 100 == 0) ){
    console.log("Year is Leap Year");
}
else{
    console.log("Year is Not Leap Year");
}
    

//Write a program that greets the user based on the time of day. Display 
// “Good morning”, “Good afternoon”, or “Good evening” depending on when the code runs.

let currentTime = new Date();
let hour = currentTime.getHours(); // Returns hour in 24-hour format (0-23)

if (hour < 12) {
    console.log("Good Morning");
}
else if (hour < 17) {
    console.log("Good Afternoon");
}
else {
    console.log("Good Evening");
}

//- Write a program that calculates the Body Mass Index (BMI) and categorizes it.
//   - Formula: BMI = weight / (height * height)

let weight = Number(prompt("Enter Weight : "));
let height = Number(prompt("Enter Height (m): "));

let bmi = weight / (height * height);

console.log("Body Mass Index (BMI) : "+bmi.toFixed(2));

// Write a simple number guessing game. Provide a secret number and a guess. Based on those numbers, give players clues if their guess is higher, lower, or correct.

let computerNumber = Math.floor(Math.random() * 100) + 1;
let count = 0;
while(true){
    let playerNumber = Number(prompt("Enter Ur Guase Number : "));
    count++;
    if(computerNumber == playerNumber){
        console.log("YOU WILL WIN THE GAME...IN "+count+" ROUNDS");
        break;
    }
    else if (computerNumber < playerNumber) {
        console.log("Your Guase is Greater Then Computer Number");
        console.log("Please Enter Small Number...");
    }
    else{
        console.log("Your Guase is Smaller Then Computer Number");
        console.log("Please Enter Big Number...");
    }
    if(count == 5){
        console.log("You Loss The Game");
        console.log("The correct number was: " + computerNumber);
        console.log("Play Again..");
        break;
    }
}


//How can you check if a variable’s value makes someone an adult or a minor with If Else?
let age1 = Number(prompt("Enter your age: "));

if (age1 >= 18) {
    console.log("You are an Adult.");
} else {
    console.log("You are a Minor.");
}
