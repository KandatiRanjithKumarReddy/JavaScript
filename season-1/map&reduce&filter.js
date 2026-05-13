// const arr = [1, 2, 3, 4, 5,500];



// function double(x){
//     return x*2;
// }

// const op = arr.map(double)  //here double is an higher order function
// console.log(op);



// const result = arr.filter((x) => x %2 == 1);
//  console.log(result);






// const reduce_result = arr.reduce((max, item) => max * item);
// console.log(reduce_result);


//finding max using reduce


// const reduce_result2 = arr.reduce(function (max, cur){
//     if (cur > max) {
//        max=cur;
//     }
//     return max;

// }, 0);
// console.log(reduce_result2);








// console.log("learning map filter and reduce");

// const arr = [1, 2, 3, 4, 10];
// const res = arr.map((i) => {
//     return i + 2;
// });
// console.log(res);


// const op = arr.filter((x) => x % 2 == 1);
// console.log(op);


// const ans = arr.reduce(function (max, cur) {
//     if(cur > max){
//         max=cur;
//     }
//     return max;

// },0);

// console.log(ans);



const users = [
  { firstName: "rames", lastName: "reddy", age: 43 },
  { firstName: "ranjith", lastName: "kummar", age: 21 },
  { firstName: "kiran", lastName: "kandti", age: 31 },
  { firstName: "sai", lastName: "reddy", age: 45 },
  { firstName: "arjun", lastName: "kumar", age: 40 }
];


// const op=users.map(x=> x.firstName+" "+x.lastName);
// console.log(op)

//freq count
const res = users.reduce(function(freq,cur){
    if(freq[cur.age]){
        freq[cur.age]++;
    }
    else{
        freq[cur.age]=1;
    }
    return freq;
},{});

console.log(res);



// const op=users.filter(x=>x.age<30).map(x=>x.firstName);
// console.log(op);

const op = users.reduce(function(arr,cur){
    if(cur.age < 30 && cur.lastName=="kummar"){
        arr.push(cur.firstName);
    }
    return arr;
},[]);

console.log(op);