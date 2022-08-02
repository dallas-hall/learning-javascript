// Create an object constructor
function Hotel(name, rooms, booked) {
    // Assign the object variables the values from the passed in parameters
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;

    // Create an object method
    this.checkAvailability = function () {
        return this.rooms - this.booked;
    };
}

// Create 2 Hotel objects
var hotel1 = new Hotel('Quay', 40, 25);
var hotel2 = new Hotel('Park', 120, 77);

// Create a variable and store some data from the Hotel object
var details1 = hotel1.name + ' rooms: ';
// Concatenate more Hotel object data to the variable
details1 += hotel1.checkAvailability();

// Get the HTML element from the web page through the id
var eHotel1 = document.getElementById('hotel1');
// Update the HTML element's text
eHotel1.textContent = details1;

// Create a variable and store some data from the Hotel object
var details2 = hotel2.name + ' rooms: ';
// Concatenate more Hotel object data to the variable
details2 += hotel2.checkAvailability();

// Get the HTML element from the web page through the id
var eHotel2 = document.getElementById('hotel2');
// Update the HTML element's text
eHotel2.textContent = details2;