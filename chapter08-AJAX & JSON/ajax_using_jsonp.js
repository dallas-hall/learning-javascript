// Create the function that will handle the external data
/*
Notes: This function is only called when the external data has been loaded
XSS is still possible, be careful of where you are sourcing data from.

 */
function showEvents(dataFromServer) {
	var newContent = '';

	for (var i = 0; i < dataFromServer.length; i++) {
		// Create the new HTML
		newContent += '<div class="event">';
		// Get the map value located in the current JSON element
		newContent += '<img src="' + responseObject.events[i].map + '" ';
		// Get the location value located in the current JSON element
		newContent += 'alt="' + responseObject.events[i].location + '" />';
		newContent += '<p><b>' + responseObject.events[i].location + '</b><br>';
		// Get the date value located in the current JSON element
		newContent += responseObject.events[i].date + '</p>';
		newContent += '</div>';
	}

	// Update the page
	document.getElementById('content').innerHTML = newContent;
}

