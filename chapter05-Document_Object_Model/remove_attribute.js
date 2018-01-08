// Get a HTML element via its id attribute
var firstListItem = document.getElementById('one');
// Check if element has a class attribute
if (firstListItem.hasAttribute('class')) {
	// Remove the class attribute
	firstListItem.removeAttribute('class');
}