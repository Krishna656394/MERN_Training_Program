// Serialization = JavaScript object ko aise format mein convert karna jo easily store ya transfer ho sake.
// _______________________________________

    // JSON.stringify() → Serialization
    // JSON.parse()     → Deserialization
// _______________________________________
// JavaScript mein commonly JSON use hota hai.
// const student = {
//     name: "Krish",
//     age: 21,
//     course: "B.Tech"
// };

// const jsonData = JSON.stringify(student);

// console.log(jsonData);

// Deserialization = JSON string ko wapas JavaScript object mein convert karna.

// const jsonData = '{"name":"Krish","age":21,"course":"B.Tech"}';

// const student = JSON.parse(jsonData);

// console.log(student.name);

// const obj = {
//     name : "krishna",
//     age = 22
//     obj2 : {
//         name :"Mahesh",
//         age : 25
//     }
// }

// const copy = {...obj}
// console.log(copy);


// Shallow copy example : first layer Orignal main change nhi karega but 
// 2nd or inner layer main reference copy karta hai jis wajah se original main change ho jata hai 
const planeobj = {
    address: "MSIT",
    light: "OFF"
};

const copyplaneobj = { ...planeobj };
copyplaneobj.address = "Janakpuri";
copyplaneobj.light = "ON";

console.log("original object", planeobj);
console.log("copyplaneobj ", copyplaneobj);
console.log("original object", planeobj);
console.log('\n');

const obj = {
    name: "mahes",
    age: 23,
    obj1: {
        name: "mai hoon gain",
        age: 403,
        obj2: {
            firstname: "firstname"
        },
        arr: ["sef", "3rrad", "sdfas"]
    }
    
};

const newObj = {...obj}
newObj.obj1.name = "Name is change";
newObj.obj1.obj2.firstname = "First  Name Is Change";

console.log("original : ",obj);
console.log("Copyied : ",newObj);


// here is deep copy -- we can change in deep we cant change in original object.
let deepCopy = JSON.parse(JSON.stringify(obj));
 
deepCopy.obj1.name = "Change Name By Deep";
console.log("Original Copy : ",obj)
console.log("Deep Copy : ",deepCopy);
console.log("Original Copy : ",obj)


// Lexical Scope → Closure → Currying
const var2 = " Rasmmdf";

function add(){
    let var1 = "Sinchand";
    const var2 = "Ram";
    return function(){
        console.log(var1);
        console.log(var2);
        return;
    }
}

function incr(){
    let counter = 0;
    return function(){
        counter ++;
        return function(){
            console.log(counter);
        }
    }
}

const a = incr();

const b = a();
b(); // 1

const c = a();
c(); // 2

const d = a();
d(); // 3
