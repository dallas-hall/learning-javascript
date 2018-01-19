// Must declare the function first because it isn't an anonymous function
// Note: this type of function cannot have arguments passed to it
function checkInput() {
	var eOutput = document.getElementById('feedback');
	// Use this to get the current object where the event happened
	if (this.value.length < 5) {
		eOutput.textContent = 'Username must be >- 5 chars';
	} else {
		eOutput.textContent = '';
	}
}
// Get the username element and when it loses focus, call this function
var eUserName = document.getElementById('username');
eUserName.onblur = checkInput;