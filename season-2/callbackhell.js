//Asynchronous Code
//Code that does not wait for a task to finish and allows other code to run at the same time.

console.log("ranjith");

function x(){
    console.log("reddy");
}
setTimeout(()=>{
    x();
},3000);

console.log("kumar")



//Synchronous Code

// console.log("before loop");

// for(let i=0;i<100;i++){console.log(i)}

// console.log("after loop");