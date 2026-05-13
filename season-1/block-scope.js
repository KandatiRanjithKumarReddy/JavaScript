var a = 100;
let b=200;
let c=300;


{
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a);
    console.log(b);
    console.log(c);

}

console.log(a);
console.log(b);
console.log(c)

//Block scope limits variables to { },
//while function scope limits variables to the entire function.
//let and const are block-scoped; var is function-scoped..” ****imp****

// 👉 var ignores blocks like if, for, while,{}
// 👉 var only respects functions