// Must declare the function first because it isn't an anonymous function
// Note: this type of function cannot have arguments passed to it

function checkInput() {
	// Get DOM node
	var eOutput = document.getElementById('feedback');
	// Check DOM node
	if (this.value.length < 5) {
		eOutput.textContent = 'Username must be >= 5 chars';
	} else {
		eOutput.textContent = '';
	}
}
// Get DOM node
var eUsername = document.getElementById('username');
/* Add the event listener - Syntax

elementName.addEventListener('eventType', functionName, eventFlow);

The event type names aren't preceded by on.
* false = event bubbling (this is the default)
* true = event capturing

Add event listener to the DOM node, that is triggered when the element
loses focus
 */
eUsername.addEventListener('blur', checkInput(), false);