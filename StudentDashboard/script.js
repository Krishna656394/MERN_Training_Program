let btn = document.getElementById("theme");
let main = document.querySelector(".main-container");
let cards = document.querySelectorAll(".card");

let flag = true;

btn.addEventListener("click", function () {

    if (flag) {
        main.style.backgroundColor = "rgb(55, 55, 55)";

        cards.forEach(function(card) {
            card.style.backgroundColor = "rgb(35, 35, 35)";
            card.style.color = "white";
            card.style.boxShadow = "0 0 10px black";
        });

        flag = false;
    } 
    else {
        main.style.backgroundColor = "rgb(250, 248, 248)";

        cards.forEach(function(card) {
            card.style.backgroundColor = "white";
            card.style.color = "black";
            card.style.boxShadow = "0 0 6px rgb(119, 118, 118)";
        });

        flag = true;
    }

});

