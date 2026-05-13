function a(){
    b();

    function b(){
        console.log(c);
    }
}

var c=10;
a();//invoking a function = calling a function
