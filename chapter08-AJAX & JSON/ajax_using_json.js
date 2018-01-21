// 1) Create the XMLHttpRequest object
var xhr = new XMLHttpRequest();

// 4) Tell the browser what to do when the server sends back a response
xhr.onload = function () {
	// 5) Only do something if everything was okay
	if (xhr.status === 200) {
		// Store all the JSON data in an object
		responseObject = JSON.parse(xhr.responseText);
	}

	var newContent = '';
	// Loop through the object, the JSON data is inside an list
	for (var i = 0; i < responseObject.events.length; i++) {
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

	document.getElementById('content').innerHTML = newContent;
};

// 2) Send the request via GET to the server address using asynchronous transmission
xhr.open('GET', 'data/data.json', true);
// 3) Don't send any additional details to the server, can omit null here
xhr.send(null);