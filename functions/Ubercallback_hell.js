// TASK:-// Uber ride using callback:-

function OpenUber(user, password, callback) {
    console.log("Login to book ride");
    console.log("Loading.....");
    setTimeout(() => {
        if (user == "Radha" && password == "123456") {
            console.log("Successfully Login!!!");
            callback(true);
        } else {
            console.log("Try again!!!");
            callback(false);
        }
    }, 1000)
}
function SearchNearbyLocation(status, callback) {
    console.log("Searching for nearby locations.....");
    setTimeout(() => {
        if (status) {
            console.log("currently two rides are available!!!");
            callback(true);
        } else {
            console.log("No rides are available currently!");
            callback(false);
        }
    }, 2000);
}
function BookRide(status, callback) {
    console.log("Ride is booking.....");
    setTimeout(() => {
        if (status) {
            console.log("Your Ride is Booked Successfully!!!");
            callback(true);
        } else {
            console.log("Something went wrong,try again!");
            callback(false);
        }
    }, 2000)
}
function OTP(status, callback) {
    console.log("Sending OTP.....");
    setTimeout(() => {
        if (status) {
            console.log("OTP sent successfully!!!");
            callback(true);
        } else {
            console.log("Something went wrong,try again after sometime!");
            callback(false);
        }
    }, 2000)
}
function Payment(status, callback) {
    console.log("payment is processing.....");
    setTimeout(() => {
        if (status) {
            console.log("Payment done successfully!!!");
            console.log("Thankyou for your ride!");
            callback(true);
        } else {
            console.log("Payment has not done!");
            callback(false);
        }
    }, 2000)
}
function Rating(status, callback) {
    console.log("your rating is uploading.....");
    setTimeout(() => {
        if (status) {
            console.log("Thankyou for your feedback!!!🙏");
            console.log("Have a nice day!");
        } else {
            console.log("Something went wrong!");
        }
    }, 2000)
}
OpenUber("Radha", "123456", (opening) => {
    // console.log(res)
    SearchNearbyLocation(opening, (searching) => {
        // console.log(searching);
        BookRide(searching, (booking) => {
            // console.log(booking);
            OTP(booking, (otp) => {
                // console.log(otp);
                Payment(otp, (paying) => {
                    // console.log(paying);
                    Rating(paying, (rating) => {
                        console.log(rating);
                    })
                })
            })
        })
    })
});


