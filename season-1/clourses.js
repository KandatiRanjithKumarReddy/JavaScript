// function a(){
//     var num=10;
//     function b() {
//         console.log(num);
//     }
//     num=100
//     b();
// }
// a();

//👍 A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment)
function a() {
    var num2=20
    function b() {
        var num1= 10;
        function c() {
            console.log(num1,num2);
        }
        c();
    }
    b();
}
a();




