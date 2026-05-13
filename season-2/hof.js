const radius=[3,1,2,4];
//good way of writing code

//re-usable logic sepearted as small small parts (components)
const area = function (radius){
    return Math.PI*radius*radius;
}
//re-usable logic sepearted as small small parts (components)
const circumference = function(radius){
    return 2*Math.PI*radius;
}
//re-usable logic sepearted as small small parts (components)
const diameter = function(radius){
    return 2*radius;
}

const calculate=function(radius,logic) {
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));

//map = same as the for loop
console.log(radius.map(area));
console.log(radius.map(circumference));
console.log(radius.map(diameter));

//bad way of writing the code 

const calculateArea = function(radius){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}
