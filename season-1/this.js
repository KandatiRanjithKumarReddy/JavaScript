
// Global Space
// var a = 10;

// function x() {
//     // Functional Space / Scope
//     console.log(this);

// }

// console.log(this); // Global space refers to the global object (window in browsers),,

// this inside a function depends on strict/non-strict mode,
// "use strict";

// function x() {
//     // In strict mode, the value is undefined,
//     // In non-strict mode, "this substitution" replaces undefined/null with the global object,,
//     console.log(this);
// }

// // this keyword value depends on how the function is called (runtime binding),,
// x();          // Called without reference (undefined in strict mode),
// window.x();   // Called with reference to window object,

// this inside an object's method,
// const obj = {
//     a: 10,
//     x: function() {
//         // 'this' refers to the object where the method is present
//         console.log(this);
//         console.log(this.a);
//     }
// };
// obj.x();

//Sharing methods and overriding 'this' using call, apply, and bind,,
// const student = {
//     name: "Akshay",
//     printName: function() {
//         console.log(this.name);
//     }
// };

// const student2 = {
//     name: "Deepika"
// };

// //  Reusing the method for student2 by overriding the value of 'this',
// student.printName.call(student2);

// this inside Arrow Functions
// const obj3 = {
//     a: 10,
//     x: () => {
//         // Arrow functions retain the value of their enclosing lexical context,
//         console.log(this); // In this case, the global object (window),,
//     }
// };
// obj3.x();

//Nested Arrow Function inside a method,
// const obj4 = {
//     a: 20,
//     x: function() {
//         // The enclosing lexical context is the method x,
//         const y = () => {
//             console.log(this); // Represents obj4,,
//         };
//         y();
//     }
// };
// obj4.x();

/**
 * this inside DOM Elements
 * In HTML event handlers, 'this' refers to the HTML element that received the event,
 */
// var a = 10;
// let b = 20;
// const c = 30;
// {
//     var a = 1;
//     let b = 2;
//     const c = 3;
//     console.log(a);
//     console.log(b);
//     console.log(c);

// }

// console.log(a);
// console.log(b);
// console.log(c);

// function x(){
//     var y=55;
//     console.log("I am Printing From Inside function: ",y);
// }
// x();

// console.log("from outside =")
// console.log(y);

