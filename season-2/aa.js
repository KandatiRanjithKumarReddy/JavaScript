

//async functions always return a promise
// async function some_data(){
//     return p;
// };

// const data = some_data();
// // console.log(data);

// data.then((x)=>console.log(x));


// const p = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve("The Promise Successfully Resolved------");
//     }, 5000);
// });

//normal way of handling promises
// p.then((res) => console.log(res));
// console.log("this will print after promisedata is printed");



//using async and await
// const p1 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve("The Promise-1 Successfully Resolved");
//     }, 20000);
// });

// const p2 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve("The Promise-2 Successfully Resolved")
//     }, 10000);
// });

// async function handling_promise() {
//     console.log("Hello World");
//     //js Engine Was Waiting here for promise to be resolved
//     const data1 = await p1;
//     console.log("From Promise-1");
//     console.log(data1);

//     const data2 = await p2;
//     console.log("From Promise-2");
//     console.log(data2);
// }

// handling_promise();



const api = 'https://api.github.com/users/akshaymarch7';


async function getData(){
    try{
        const res = await fetch(api);
        const jsonvalue=await res.json();
        console.log(jsonvalue);
    }
    catch(err){
        console.err(err)
    }
}

getData();