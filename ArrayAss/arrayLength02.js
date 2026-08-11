// Q2. Print the total number of items in the array.

const colors = ["red", "blue", "green", "yellow"];

console.log(colors.length);

// Manual Counting...

let len = 0;
for(let color of colors){
    len++;
}

console.log("Array Length = ", len);