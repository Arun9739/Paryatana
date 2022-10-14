function checkDateCarRental() {
    let pickupDate = document.forms["form-car-rental"]["pickup-date"].value;
    let returnDate = document.forms["form-car-rental"]["return-date"].value;
    let curDate = new Date().toLocaleString();

    if (curDate > pickupDate || returnDate < pickupDate) {
        alert("Invalid Pickup Date or/and Return Date!");
        return false;
    }

    return true;
}

function checkDateHotelBooking() {
    let checkinDate = document.forms["form-hotel-booking"]["checkin-date"].value;
    let checkoutDate = document.forms["form-hotel-booking"]["checkout-date"].value;
    let curDate = new Date().toLocaleString();

    if (curDate > checkinDate || checkoutDate < checkinDate) {
        alert("Invalid Checkin Date or/and Checkout Date!");
        return false;
    }

    return true;
}