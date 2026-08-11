// Q24. Age in Days Calculator
// Write a function calculateAgeInDays(ageInYears)
// that returns approximate age in days.
// Assume 365 days per year.

const prompt = require("prompt-sync")();

function calculateAgeInDays(ageInYears) {

    let days = ageInYears * 365;

    return days;
}

let age = Number(prompt("Enter your age in years:"));

console.log("Age in days:", calculateAgeInDays(age));