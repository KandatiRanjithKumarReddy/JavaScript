const cart = ["T-shirts", "Boxers", "Shirts", "Pants"]

createOrder(cart)
    .then(function (orderId) {
        console.log(orderId)
        return orderId;
    })
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
    })
    .catch((err) => {
        console.log(err.message);
    })
    .then(function(orderId){
        console.log("I will print everytime.catch only checks top functions")
    })

// creation of promise
function createOrder(cart) {  //returns orderId

    const pr = new Promise(function (resolve, reject) {

        // createOrder
        // validateCart
        // orderId

        if (!validateCart(cart)) {
            const err = new Error("not a valid cart!");
            reject(err);
        }

        // logic for createOrder
        const orderId = "556688";
        if (orderId) {
            // setTimeout(function () {
            //     resolve(orderId);
            // }, 5000)
            resolve(orderId);
            console.log(cart);
        }
    });

    return pr;
}

function validateCart(cart) {
    if (!cart || cart.length === 0) {
        return false;
    }
    return true;
}

function proceedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        resolve("Payment Successfull");
    })
}



