// Create a new HTML element and store it in a variable
var newElement = document.createElement('li');

// Create a new DOM text node and store it in a variable
var newText = document.createTextNode('quinoa');

// Attach the new text node to the new element
newElement.appendChild(newText);

// Find the position where the new should be added, this will add to the end
// of the ul
var ePosition = document.getElementsByTagName('ul')[0];
console.log(typeof ePosition);
console.log(ePosition);

// Insert the new element into its position
ePosition.appendChild(newElement);