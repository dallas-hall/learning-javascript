var username = 'Molly';
var message = 'Good golly miss ' + username;

// Get an element from the document using its id attribute
var eName = document.getElementById('name');
// Update the elements text
eName.textContent = username;
var eNote = document.getElementById('note');
eNote.textContent = message;