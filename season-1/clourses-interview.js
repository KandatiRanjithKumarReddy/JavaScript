function counter(){
    var count =0;
    return function countt(){
        count++;
        console.log(count);
    }
}

var count=counter();
count();
count();
count();
count();
