let name={
    fn:"ranjith",
    ln:"reddy"
}

let printName=function(city,fatherName){
    console.log(this.fn+" "+this.ln+" "+"from"+" "+city+" "+"son of"+" "+fatherName);
}

let name2={
    fn:"Rahul",
    ln:"Reddy"
}

//this is called function borrowing
printName.call(name,"AP","vijay reddy");
//the difference between call and apply is that is
//In call we pass the arguments one by one 
//In apply we pass the arguments as an array

printName.apply(name,["AP","vijay"]);


//Purpose: Unlike call and apply which immediately execute the function, 
// the bind method does not invoke the function right away. Instead, 
// it creates and returns a copy (or a bound version) of the original function.
// Currying means turning one function into many small functions.
// Each function takes one value at a time until all values are given.
let printName2=printName.bind(name2,"AP","vijay reddy");
printName2();
