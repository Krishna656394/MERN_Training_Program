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


// Regular Expression
// Used forward :- / /


const form = document.getElementById("form");

const name = document.getElementById("name");
const email = document.getElementById("email");
const mono = document.getElementById("mono");
const pwd = document.getElementById("pwd");
const cpwd = document.getElementById("cpwd");

const male = document.getElementById("male");
const female = document.getElementById("female");

const java = document.getElementById("java");
const cpp = document.getElementById("c++");
const js = document.getElementById("js");

const address = document.getElementById("address");
const pinCode = document.getElementById("pinCode");
const country = document.getElementById("country");
const dob = document.getElementById("dob");


form.addEventListener("click", (e)=> {

    e.preventDefault();

    // ---------------- NAME ----------------

    if (name.value.trim() === "") {
        alert("Please enter your name");
        name.focus();
        return;
    }

    if (name.value.trim().length < 3) {
        alert("Name must contain at least 3 characters");
        name.focus();
        return;
    }


    // ---------------- EMAIL ----------------

    if (email.value.trim() === "") {
        alert("Please enter your email");
        email.focus();
        return;
    }

    if (!email.value.includes("@") || !email.value.includes(".")) {
        alert("Please enter a valid email");
        email.focus();
        return;
    }


    // ---------------- MOBILE ----------------

    if (mono.value.trim() === "") {
        alert("Please enter your mobile number");
        mono.focus();
        return;
    }

    if (mono.value.length !== 10) {
        alert("Mobile number must contain 10 digits");
        mono.focus();
        return;
    }

    if (isNaN(mono.value)) {
        alert("Mobile number must contain only digits");
        mono.focus();
        return;
    }


    // ---------------- PASSWORD ----------------

    if (pwd.value === "") {
        alert("Please enter password");
        pwd.focus();
        return;
    }

    if (pwd.value.length < 8) {
        alert("Password must contain at least 8 characters");
        pwd.focus();
        return;
    }


    // ---------------- CONFIRM PASSWORD ----------------

    if (cpwd.value === "") {
        alert("Please confirm your password");
        cpwd.focus();
        return;
    }

    if (pwd.value !== cpwd.value) {
        alert("Password and Confirm Password do not match");
        cpwd.focus();
        return;
    }


    // ---------------- GENDER ----------------

    if (!male.checked && !female.checked) {
        alert("Please select your gender");
        return;
    }


    // ---------------- SUBJECT ----------------

    if (!java.checked && !cpp.checked && !js.checked) {
        alert("Please select at least one subject");
        return;
    }


    // ---------------- ADDRESS ----------------

    if (address.value.trim() === "") {
        alert("Please enter your address");
        address.focus();
        return;
    }


    // ---------------- PIN CODE ----------------

    if (pinCode.value.trim() === "") {
        alert("Please enter your PIN code");
        pinCode.focus();
        return;
    }

    if (pinCode.value.length !== 6) {
        alert("PIN code must contain 6 digits");
        pinCode.focus();
        return;
    }

    if (isNaN(pinCode.value)) {
        alert("PIN code must contain only numbers");
        pinCode.focus();
        return;
    }


    // ---------------- COUNTRY ----------------

    if (country.value.trim() === "") {
        alert("Please enter your country");
        country.focus();
        return;
    }


    // ---------------- DOB ----------------

    if (dob.value.trim() === "") {
        alert("Please enter your date of birth");
        dob.focus();
        return;
    }

    alert("Registration Successful!");

});