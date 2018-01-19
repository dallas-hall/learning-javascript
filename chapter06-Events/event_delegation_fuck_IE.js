/*
Note: IE5-8 code removed, check the textbook example to support that garbage
 */

// Get the target element from the event object
function getTarget(event) {
	return event.target || event.srcElement;
}

function itemDone(event) {
	// Get the target that was clicked
	var targetElement = getTarget(event);
	// Get the list item
	var targetElementParent = targetElement.parentNode;
	// Get the list
	var targetElementGrandParent = targetElementParent.parentNode;
	// Remove the list item from the list
	targetElementGrandParent.removeChild(targetElementParent);

	// Prevent the link from taking you anywhere else
	event.preventDefault();
}

// Get the shopping list
var list = document.getElementById('shoppingList');
// Add an event listener for mouse clicks
list.addEventListener('click', function (event) {
	// When a click happens, send that event object to a function
	itemDone(event);
}, false);