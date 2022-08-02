// Create a literal object
var hotel = {
    // Create its variables
    name: 'Mr Mkay',
    rooms: 420,
    booked: 399,

    // Create its methods
    checkAvailability: function() {
        return this.rooms - this.booked;
    }
};

// Get the HTML element with the id hotelName
var eName = document.getElementById('hotelName');
// Set its text using the name from the hotel object
eName.textContent = hotel.name;

var eRooms = document.getElementById('rooms');
eRooms.textContent = hotel.checkAvailability()
