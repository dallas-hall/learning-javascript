// Create an object
var hotel = {
    // Object variables
    name: 'Park',
    rooms: 120,
    booked: 77
};

// Add 2 more object variables
hotel.gym = true;
hotel.pool = false;
// Remove an object variable
delete hotel.booked;

// Get a HTML element from the web page through its id
var eName = document.getElementById('hotelName');
// Set that HTML element's text
eName.textContent = hotel.name;

var ePool = document.getElementById('pool');
// Set the class name of the HTML element
ePool.className = 'Pool: ' + hotel.pool;

var eGym = document.getElementById('gym');
eGym.className = 'Gym: ' + hotel.gym;
