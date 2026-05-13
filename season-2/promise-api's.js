const pro1 = new Promise(function (resolve, reject) {
    //setTimeout(() => resolve("promise 1 sucessfull"), 1000);
    setTimeout(() => reject("promise 1 Rejected"), 5000);
});

const pro2 = new Promise(function (resolve, reject) {
    //setTimeout(() => resolve("promise 2 successfull"), 2000);
    setTimeout(() => reject("promise 2 Rejected"), 2000);

});

const pro3 = new Promise(function (resolve, reject) {
    //setTimeout(() => resolve("promise 3 successfull"), 5000);
    setTimeout(() => reject("promise 2 Rejected"), 2000);
});

// Promise.all([pro1, pro2, pro3])
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err))

// Promise.allSettled([pro1, pro2, pro3])
//     .then((res) => console.log(res))
//     .catch((err)=>console.error(err))

// Promise.race([pro1, pro2, pro3])
//      .then((res) => console.log(res))
//      .catch((err)=>console.error(err));

Promise.any([pro1, pro2, pro3])
    .then((res) => console.log(res))
    .catch((err) => {
        console.error(err);
        console.log(err.errors);
    });
