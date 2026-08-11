// Q5. Find the index of 78.

const scores = [85, 92, 78, 90];

console.log(scores.indexOf(78));

// Manual Finding.
let idx = -1;
for(let i = 0; i < scores.length; i++){
    if(scores[i] == 78){
        idx = i + 1;
    }
}

console.log("index = ", idx);
