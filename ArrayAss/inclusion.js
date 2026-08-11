// Q6. Check if laptop exists in the array.

const items = ["phone", "tablet", "laptop", "watch"];

console.log(items.includes("laptop"));

// Manual check...
let flag = false;
for(let i = 0; i < items.length; i++){
    if(items[i] == "laptop"){
        flag = true
    }
}



console.log("index = ", flag);