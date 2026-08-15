// Inline Event
const btn = document.querySelector('button');
// console.dir(btn);


// At a time one Event can perform

// btn.onclick = function(){
//     console.log('Button Was Click');
// }

// function enter(){
//     console.log("Some Things is Enter");
    
// }

// btn.onmouseenter = enter;

// Event Listener for multiple operation.

btn.addEventListener('click', sayHello);
btn.addEventListener('click', sayName);

function sayHello(){
    alert('Say Hello');
}
function sayName(){
    console.log('Krihna Yadav');
}