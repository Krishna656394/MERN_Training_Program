// const x =document.querySelector('naming');
// const y =document.querySelectorAll('naming');

// let selecting = document.querySelector('#title')
// let button = document.querySelector('#btn')

// button.addEventListener("click", function(){
//     selecting.innerHTML //XSS attack se Protect karta
//     selecting.innerText // slow hai as compare 
//     selecting.textContent = "Hi I m Krishna";
//     selecting.style.color = "red";
// })

// // First jo match karega vo lega.
// let textChange = document.querySelector('.text');
// console.log(textChange); 

// let text = document.querySelectorAll('.text')
// // console.log(text);

// // console.log("Query = ", text[0]);

// text.forEach((num)=>{console.log(num)});

const list = document.querySelectorAll('.list');
console.log(list)
list.forEach((item, idx) =>{
    if(idx % 2 == 0){
        item.style.color = "red";
    }
    else{
        item.style.color = "green";
    }
})

