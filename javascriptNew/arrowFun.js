// Arrow Function.....
const func = (a , b)=>{
    return a + b; // Explict Return
}

const sum = (a, b) => {return a + b};

console.log(func(3, 5));

// Arrow Function.
const squre = (a) =>(
    a * a // Implict return if single value return then used it.
)

console.log(squre(4));
