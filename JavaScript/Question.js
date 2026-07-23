// Write a program that determines whether a given number is positive or negative.

let num = 10;
if(num > 0){
    console.log("Number is Positive");
}
else{
    console.log("Number is Negative");
    
}


//Write a program that checks if a number is even or odd.

if(num % 2 == 0){
      console.log("Number is Even");
}
else{
    console.log("Number is Odd");
    
}

//Write a program to determine the greater of two numbers.
let num1 = 10;
let num2 = 20;
if(num1 > num2){
    console.log(num1+" is Greater");
}
else{
    console.log(num2+" is Greater");
}

//Write a program that transforms a numerical grade to a letter grade (e.g., grade 10 should display “A”).

let grade = 10;
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

    let age = 12;
    let noOf_Ticket = 4;
    
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

    