// We can declare variables first because of the anonymouse function below
// Get DOM nodes
var eUsername = document.getElementById('username');
var eOutput = document.getElementById('feedback');

function checkInput(minimumLength) {
	// Need to specify object here to be sure we are checking the right object
	if (eUsername.value.length < minimumLength) {
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
eUsername.addEventListener('blur', function() {
	// Call function with parameters
	checkInput(5);
}, false);