// function x(){
//     var i=5;
//     setTimeout(function(){
//         console.log(i);
//     },5000);
//     console.log("I am Not Gonna wait for setTimeout")
// }

// x();



//I-1
function x() {

    for (let i = 0; i <= 10; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("Let's Go")
}

x();