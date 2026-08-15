const btn = document.querySelector("button");

btn.addEventListener('click', function(e){
    
    e.preventDefault();
    console.log("Hello Form Is Submit");

    let input = document.querySelector('input');
    console.dir(input.value);
})