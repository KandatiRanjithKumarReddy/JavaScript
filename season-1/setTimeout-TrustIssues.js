console.log("Start");

setTimeout(function xyz(){
    console.log("callback");
}, 5000);

console.log("End");

let start = Date.now();

while (Date.now() - start < 10000) {
    
}

console.log("While Expires");