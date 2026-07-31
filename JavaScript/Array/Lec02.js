// write a program a function which accept.

// function sum(...abc) {
//     let x = 0;

//     for (let value of abc) {
//         x += value;
//     }

//     return x;
// }

// console.log(sum(2, 4, 5, 8, 9,9,0,8));

//.....In case Large amount of data we use push and pop because it 
//.....less time as compare to shift() and unshift().

// const arr = ["A", "B", "C", "D"]
// arr.push("E");
// arr.pop();
// console.log(arr.shift());

// arr.unshift("Start", true, 34);

// console.log(arr)

// for(let a of arr){
//     console.log(a);
// }


// startIndex → Kahan se operation start hoga.
// deleteCount → Kitne elements delete honge.
// item1, item2... → Delete ki jagah kaun se naye elements insert karne hain.
// let arr = [1,2,3,4,5,6,7,8,9]
// arr.splice(1, 3, 5);
// console.log(arr)

// const arr = [1,2,3] // array alway declare with const as good practice
// arr[1] = 5;
// console.log(arr);


// const arr = Array.from([2,3,4,5] , x => x * x); // the form method return array in case of any types of data
// console.log(arr);

// sort Method

const numberVal = [34, 5, 3, 5, 24];
numberVal.sort((a , b) => a-b);
console.log(numberVal);

