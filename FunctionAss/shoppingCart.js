// Q22. Shopping Cart Tax & Total Calculator

const prompt = require("prompt-sync")();

function calculateTotal(price, quantity, taxRate) {

    
    let subtotal = price * quantity;

    
    let tax = subtotal * (taxRate / 100);

    
    let total = subtotal + tax;

    return total;
}

let price = Number(prompt("Enter price:"));
let quantity = Number(prompt("Enter quantity:"));
let taxRate = Number(prompt("Enter tax rate (%):"));

console.log("Final Total:", calculateTotal(price, quantity, taxRate));