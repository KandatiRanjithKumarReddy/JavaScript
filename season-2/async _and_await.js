//async
// const pro = new Promise((resolve,reject)=>{
//     resolve("promise resolved!")
// })


// async function fun(){
//     //return "async functions always returns promise"
//     return pro
// }

// const data=fun();
// // console.log(data);
// data.then((x)=>console.log(x))



//async and await

// const p = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("Promise Resolved Value!!");
//     },5000)
  
// });

//1.handling promises with the async and await
//2.await only used inside the async functions
// async function handlePromise() {
//     console.log("top of the await")
//   const val = await p;//here Js Engine Was Waiting for promise
//   console.log("Namaste JavaScript");
//   console.log(val);
// }
// handlePromise();


//handling promises normally 
//1.js engine does not wait for anything 
// function getData() {
//   p.then((res) => console.log(res));
//   console.log("NamasKhaar Js");
// }

const api = 'https://api.github.com/users/akshaymarch7'
//modern way of writing 
async function handleapi(){
    try{
    const responseData=await fetch(api);
    const jsonValue= await responseData.json();
    console.log(jsonValue);
    }
    catch (err){
        console.log(err.message);
        
    }

}
handleapi();