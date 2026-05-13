const users = [
  { firstName: "ranjith", lastName: "kumar", age: 21 },
  { firstName: "suresh",  lastName: "reddy", age: 24 },
  { firstName: "anita",   lastName: "sharma", age: 20 },
  { firstName: "vikram",  lastName: "singh", age: 21 },
  { firstName: "priya",   lastName: "patel", age:20},
];



// const result=users.map((x)=>x.firstName);
// console.log(result);


// const op = users.reduce(function(acc,cur){
//     if(acc[cur.age]){
//         acc[cur.age] = ++acc[cur.age];

//     }
//     else{
//         acc[cur.age]=1;
//     }
//     return acc;
// },{})

// console.log(op);


const res=users.filter((x) => x.age == 21).map((x)=>x.firstName);
console.log(res);