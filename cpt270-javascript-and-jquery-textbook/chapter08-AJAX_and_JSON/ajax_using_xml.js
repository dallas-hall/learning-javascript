// 1) Create the XMLHttpRequest object
var xhr = new XMLHttpRequest();

// 4) Tell the browser what to do when the server sends back a response
xhr.onload = function() {
	// 5) Only do something if everything was okay
	if(xhr.status === 200) {
		// Get the XML from the server
		var response = xhr.responseXML;
		// Get all the <event> elements in the XML
		var events = response.getElementsByTagName('event');

		// loop through all the <event> elements
		for(var i = 0; i < events.length; i++) {
			// Create a <div class="event"> container
			var container = document.createElement('div');
			container.className = 'event';

			// Create a <img>
			var image = document.createElement('img');
			// Create  <img src="image-from-XML">
			image.setAttribute('src', getNodeValue(events[i], 'map'));
			// Create <img src="image-from-XML" alt="data-from-XML">
			image.appendChild(document.createTextNode(getNodeValue(events[i], 'map')));
			// Add it to the <div>
			container.appendChild(image);

			// Create a <p>, <b>, and <br>
			var location = document.createElement('p');
			var city = document.createElement('b');
			var newline = document.createElement('br');
			// Create <b>location-data-from-XML</b>
			city.appendChild(document.createTextNode(getNodeValue(events[i], 'location')));
			// Create <p></p><br>
			location.appendChild(newline);
			// Create <p><b>location-data-from-XML</b></p><br>
			location.insertBefore(city, newline);
			// Create <p><b>location-data-from-XML</b></p><br>date-data-from-XML
			location.appendChild(document.createTextNode(getNodeValue(events[i], 'date')));
			// Add it to the <div> and add that to the page
			container.appendChild(location);
			document.getElementById('content').appendChild(container);
		}

		function getNodeValue(obj, tag) {
			// Get the XML data via its tag name
			return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
		}
	}
};

// 2) Send the request via GET to the server address using asynchronous transmission
xhr.open('GET', 'data/data.xml', true);
// 3) Don't send any additional details to the server, can omit null here
xhr.send(null);
