let div = document.querySelector("div");
let ul = document.querySelector("ul");

let lis = document.querySelectorAll("li");

div.addEventListener("click", function(){
    console.log("div was clicked");
})

ul.addEventListener("click", (event)=>{
    event.stopPropagation();
    console.log("Ul was click");
    return;
});

for(li of lis){
    li.addEventListener("click", function(event){
        event.stopPropagation(); // Its Stop from element bubbling.
        console.log("Li Was Clicked");  
    });
}
