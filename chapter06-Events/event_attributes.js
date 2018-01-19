function checkInput() {
	// Get the elements via id attribute
	var eOutput = document.getElementById('feedback');
	var eUserName = document.getElementById('username');
	if (eUserName.value.length < 5) {
		// Display error to the user
		eOutput.textContent = 'Input needs to be >= 5 characters.'
	}
	else {
		// Reset the message when it isn't needed
		eOutput.textContent = '';
	}
}