// Q23. Grade Assigner
// Write a function getGrade(score) that takes a numerical score
// and returns the corresponding letter grade.

const prompt = require("prompt-sync")();

function getGrade(score) {

    if (score >= 90 && score <= 100) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}

let score = Number(prompt("Q23: Enter your score:"));

console.log("Grade:", getGrade(score));