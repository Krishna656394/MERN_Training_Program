// const form = document.getElementById('form');

// form.addEventListener("click", (e)=>{
//     e.preventDefault();
//     const username = document.querySelector('#userName').value;
//     let issue = getElementById('error');

//     if(username === ""){
//         alert("username is required")
//         issue.textContent("There is Empty");
//     }

//     if(username.length >= 5 && username.length <= 15){
//         alert("Username must be in range")
//     }

//     const emailValid = document.querySelector('#emailValid');
//     if(emailValid.includes("@")){

//     }

// })



// JavaScript Validation

// const form = document.getElementById("form");

// const name = document.getElementById("name");
// const email = document.getElementById("email");
// const mono = document.getElementById("mono");
// const pwd = document.getElementById("pwd");
// const cpwd = document.getElementById("cpwd");

// const male = document.getElementById("male");
// const female = document.getElementById("female");

// const java = document.getElementById("java");
// const cpp = document.getElementById("c++");
// const js = document.getElementById("js");

// const address = document.getElementById("address");
// const pinCode = document.getElementById("pinCode");
// const country = document.getElementById("country");
// const dob = document.getElementById("dob");


// form.addEventListener("click", (e)=> {

//     e.preventDefault();

//     if (name.value.trim() === "") {
//         alert("Please enter your name");
//         name.focus();
//         return;
//     }

//     if (name.value.trim().length >= 5 && name.value.length.trim().length <= 18) {
//         alert("Name must contain at least 5 characters");
//         name.focus();
//         return;
//     }

//     if (email.value.trim() === "") {
//         alert("Please enter your email");
//         email.focus();
//         return;
//     }

//     if (!email.value.includes("@") || !email.value.includes(".")) {
//         alert("Please enter a valid email");
//         email.focus();
//         return;
//     }


//     if (mono.value.trim() === "") {
//         alert("Please enter your mobile number");
//         mono.focus();
//         return;
//     }

//     if (mono.value.length !== 10) {
//         alert("Mobile number must contain 10 digits");
//         mono.focus();
//         return;
//     }

//     if (isNaN(mono.value)) {
//         alert("Mobile number must contain only digits");
//         mono.focus();
//         return;
//     }

//     if(mono.value.charAt(0) < '6' ){
//         alert("Mobile number must be strat 6 or greater than 6");
//         mono.focus();
//         return;
//     }


//     if (pwd.value === "") {
//         alert("Please enter password");
//         pwd.focus();
//         return;
//     }

//     if (pwd.value.length < 8) {
//         alert("Password must contain at least 8 characters");
//         pwd.focus();
//         return;
//     }


//     if (cpwd.value === "") {
//         alert("Please confirm your password");
//         cpwd.focus();
//         return;
//     }

//     if (pwd.value !== cpwd.value) {
//         alert("Password and Confirm Password do not match");
//         cpwd.focus();
//         return;
//     }


//     if (!male.checked && !female.checked) {
//         alert("Please select your gender");
//         return;
//     }

//     if (!java.checked && !cpp.checked && !js.checked) {
//         alert("Please select at least one subject");
//         return;
//     }



//     if (address.value.trim() === "") {
//         alert("Please enter your address");
//         address.focus();
//         return;
//     }


//     if (pinCode.value.trim() === "") {
//         alert("Please enter your PIN code");
//         pinCode.focus();
//         return;
//     }

//     if (pinCode.value.length !== 6) {
//         alert("PIN code must contain 6 digits");
//         pinCode.focus();
//         return;
//     }

//     if (isNaN(pinCode.value)) {
//         alert("PIN code must contain only numbers");
//         pinCode.focus();
//         return;
//     }

//     if (country.value.trim() === "") {
//         alert("Please enter your country");
//         country.focus();
//         return;
//     }


//     if (dob.value.trim() === "") {
//         alert("Please enter your date of birth");
//         dob.focus();
//         return;
//     }

//     if(dob.value.trim().split(0, 2) > 0 && dob.value.trim().split(0, 2) <= 31){
//         alert("Please enter your correct date of birth");
//         dob.focus();
//         return;
//     }

//     alert("Registration Successful!");

// });


// Regular Expression 
// const username = /helloIndia/;
// console.log(username.test("helloIndia"));

// const regexTest = /^[a-zA-Z]$/;
// console.log(regexTest.test("M"));


// Validation With Regex

const form = document.getElementById("form");

form.addEventListener("click", function (e) {
    e.preventDefault();

    // Get values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mono").value.trim();
    let password = document.getElementById("pwd").value;
    let confirmPassword = document.getElementById("cpwd").value;
    let address = document.getElementById("address").value.trim();
    let pinCode = document.getElementById("pinCode").value.trim();
    let country = document.getElementById("country").value.trim();
    let dob = document.getElementById("dob").value.trim();

    // ---------------- REGEX ----------------

    // Name: 5 to 18 characters, only alphabets and spaces
    let nameRegex = /^[A-Za-z ]{5,18}$/;

    // Email: example@gmail.com
    let emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.com$/;

    // Mobile: exactly 10 digits and first digit 6-9
    let mobileRegex = /^[6-9][0-9]{9}$/;

    // Password: minimum 8 characters,
    // at least one uppercase, lowercase, digit and special character
    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&*!]).{8,}$/;

    // Pincode: exactly 6 digits
    let pinRegex = /^[0-9]{6}$/;

    // Country: alphabets and spaces only
    let countryRegex = /^[A-Za-z ]+$/;


    // ---------------- VALIDATION ----------------

    if (!nameRegex.test(name)) {
        alert("Name must be 5 to 18 characters and should not contain numbers.");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Enter a valid email ending with .com");
        return;
    }

    if (!mobileRegex.test(mobile)) {
        alert("Mobile number must contain 10 digits and start with 6, 7, 8 or 9.");
        return;
    }

    if (!passwordRegex.test(password)) {
        alert("Password must contain at least 8 characters, uppercase, lowercase, number and special character.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match.");
        return;
    }


    // Gender compulsory
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;

    if (!male && !female) {
        alert("Please select gender.");
        return;
    }


    // Subject: minimum 1 and maximum 2
    let subjects = document.querySelectorAll(
        'input[type="checkbox"]:checked'
    );

    if (subjects.length < 1 || subjects.length > 2) {
        alert("Select minimum 1 and maximum 2 subjects.");
        return;
    }


    // Address
    if (address === "") {
        alert("Address is required.");
        return;
    }

    if (!pinRegex.test(pinCode)) {
        alert("Pincode must contain exactly 6 digits.");
        return;
    }

    if (!countryRegex.test(country)) {
        alert("Enter a valid country name.");
        return;
    }


    // DOB
    let dobDate = new Date(dob);
    let minimumDate = new Date("2000-01-01");

    if (isNaN(dobDate.getTime())) {
        alert("Enter a valid DOB.");
        return;
    }

    if (dobDate <= minimumDate) {
        alert("DOB must be after 1 January 2000.");
        return;
    }


    alert("Form submitted successfully!");
});


