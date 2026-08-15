const btn = document.querySelector("button");


btn.addEventListener("click", function(){
    let h3 = document.querySelector('h3');
    let randCol = getRandomColor();

    h3.innerText = randCol;

    let divBox = document.querySelector('div');
    divBox.style.backgroundColor = randCol;

});

function getRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`

    return color;
}