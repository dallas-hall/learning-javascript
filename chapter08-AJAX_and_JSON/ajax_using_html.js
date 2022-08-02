// 1) Create the XMLHttpRequest object
var xhr = new XMLHttpRequest();

// 4) Tell the browser what to do when the server sends back a response
xhr.onload = function () {
	// 5) Only do something if everything was okay
	if(xhr.status === 200) {
		// 6) Update the elements HTML
		document.getElementById('content').innerHTML = xhr.responseText;
	}
};

// 2) Send the request via GET to the server address using asynchronous transmission
xhr.open('GET', 'data/data.html', true);
// 3) Don't send any additional details to the server, can omit null here
xhr.send(null);
