// Currying means breaking one function with many arguments into a chain of small functions.
// Each function takes one argument and returns another function until all values are provided.
let m = function(a,b){
    console.log(a*b);
}
// currying way-1 
let m1 = m.bind(this,2);
m1(5);

let m2 = m.bind(this,5);
m2(5);

// currying way-2
// This is currying with a nested function.
let m3 = function(a){ 
    return function(b){
        console.log(a*b);
    }
}

m3(6)(5);

//Currying allows you to fix a few arguments in place and generate a new, specialized function that you can reuse over and over again.
// This prevents you from repeating the same arguments across your codebase