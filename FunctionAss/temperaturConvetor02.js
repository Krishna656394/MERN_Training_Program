
const prompt = require("prompt-sync")();
const celsius = Number(prompt("Enter Temperature in celsius : "));

function celsiusToFahrenheit(celsius){
    console.log((celsius * 9 / 5) + 32);
    
}

const fahrenheit = Number(prompt("Enter Temperature in fahrenheit : "));

function  fahrenheitToCelsius(fahrenheit){
    console.log(fahrenheit - 32) * 5 / 9;
}

celsiusToFahrenheit(celsius);
fahrenheitToCelsius(fahrenheit);