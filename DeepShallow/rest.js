
// This is Rest Operator
let sum = 0;
function add(...num) {
    for (let n of num) {
        sum = sum + n;
    }

    console.log(sum);
}
add(3,5,7,2,8,9,0);

// Spread ...
let arr1 = [3,5,2,1];
let arr2 = [9,8,7];

let ans = [...arr1, ...arr2];
console.log(ans);

