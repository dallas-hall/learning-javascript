// Create a literal object
var hotel = {
    // Create its variables
    name: 'Park Ji Sun',
    rooms: 88,
    booked: 88,

    // Create its methods
    checkAvailability: function() {
        return this.rooms - this.booked;
    }
};

// Update a variable
hotel.name = "lol soz no moar";

// Get the HTML element with the id hotelName
var eName = document.getElementById('hotelName');
// Set its text using the name from the hotel object
eName.textContent = hotel.name;

var eRooms = document.getElementById('rooms');
eRooms.textContent = hotel.checkAvailability();
