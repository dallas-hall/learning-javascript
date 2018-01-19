/*
Note: IE5-8 code removed, check the textbook example to support that garbage
 */

function checkInput(event, minimumLength) {
	// Get the element that fired the event
	var targetElement = event.target;
	var eOutput = targetElement.nextSibling;

	if (targetElement.value.length < minimumLength) {
		eOutput.textContent = 'Username must be >= 5 chars';
	} else {
		eOutput.textContent = '';
	}
}

/* Add the event listener - Syntax with parameters

elementName.addEventListener('eventType', function() {
	functionName(parameter);
}, eventFlow);

The event type names aren't preceded by on.
Event flow
* false = event bubbling (this is the default)
* true = event capturing

Add event listener to the DOM node, that is triggered when the element
loses focus
 */
var eUsername = document.getElementById('username');
eUsername.addEventListener('blur', function(event) {
	// Call function with parameters
	checkInput(event, 5);
}, false);