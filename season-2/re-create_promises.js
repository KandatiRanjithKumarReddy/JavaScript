const destinations = ["goa", "ladakh", "varanasi", "pondicherry"];

// creating a promise
function book_a_tour(destinations) {
    const pro = new Promise(function (resolve, reject) {
        //only logined users can book a tour with selected destinations
        if (!validate_user(destinations)) {
            const err = new Error("You're Not Loggined! Only Loginned Users Can Acess This Page");
            reject(err);
        }
        const tour_id = 568;
        if (tour_id) {
            resolve(tour_id);
        }
    });
    return pro;
}

function validate_user(destinations) {
    return true;
}

function proceed_to_payment(tour_id){
    const pr = new Promise(function(reslove,reject){
        reslove("Paid Sucessfully");
    });

}


//using a promise
book_a_tour(destinations)
    .then(function (tour_id) {
        return tour_id;
    })
    .then(function(tour_id){
        console.log("Payment Recived for the tour_id =",tour_id);
    })
    .catch(function (err) {
        console.log(err.message);
    })