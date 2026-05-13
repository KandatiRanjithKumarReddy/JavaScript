//Rest operator:
//Collects multiple values into a single array (many → one), mainly used in function parameters.
//used in parameters

function x(name, ...marks) {
    let ans = 0;
    for (let i = 0; i < marks.length; i++) {
        ans += marks[i];
    }
    console.log(name, ans);
}

x("Ranjith", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//Spread operator: 
// Expands an array or object into individual values (one → many), mainly used while calling functions or copying/merging data.
//used in Arguments
let a = [1, 2, 3];
let b = [4, 5, 6];
const c = ["ranjith", "Kumar", "Reddy"];
const d = "true";
const e = "ok mawa ";
console.log(...a, ...b, ...c, ...d, ...e);