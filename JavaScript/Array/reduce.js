// reduce() ek single value return karta hai.
// Ye single value kuch bhi ho sakti hai:

// Number, String, Object, Array, Boolean

// Ye is baat par depend karta hai ki callback function kya return kar raha hai.

// syntax : 
// array.reduce((accumulator, currentValue) => {
//     return updatedAccumulator;
// }, initialValue);

// const arr = [1,2,3,4,5];

// let sum = arr.reduce((a, b)=>a + b, 0)
// console.log(sum);

// let arr = [2, 3, 4];

// let result = arr.reduce((acc, curr) => acc * curr, 1);

// console.log(result);