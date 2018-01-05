// Get some information from the window object through the this keyword
var myBrowserWidth = window.innerWidth;
var myBrowserHeight = window.innerHeight;
var myScreenWidth = window.screen.width;
var myScreenHeight = window.screen.height;
var myHistory = window.myHistory;
var myURL = window.location;

// Create a message to display
var message = '<h2>Browser window</h2><p>Width: ' + myBrowserWidth + '</p>';
// Concatenate more information
message += '<p>Height: ' + myBrowserHeight + '</p>';
message += '<h2>Screen</h2><p>Width: ' + myScreenWidth + '</p>';
message += '<p>Height: ' + myScreenHeight + '</p>';

// Display the message on the page
var eInfo = document.getElementById('info');
// Update the HTML
eInfo.innerHTML = message;

// Create a popup
alert('Current page URL: ' + myURL);