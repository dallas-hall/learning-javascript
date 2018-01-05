// Create a blank object
var hotel = new Object();

// Add properties to it and assign values
hotel.name = 'Park Ji Sun';
hotel.rooms = 120;
hotel.booked = 77;

// Add a method to the object
hotel.checkAvailability = function() {
    // The this keyword refers to the current object
    return this.rooms - this.booked;
};

// Get the HTML element with the id hotelName
var eName = document.getElementById('hotelName');
// Set its text using the name from the hotel object
eName.textContent = hotel.name;

var eRooms = document.getElementById('rooms');
eRooms.textContent = hotel.checkAvailability();