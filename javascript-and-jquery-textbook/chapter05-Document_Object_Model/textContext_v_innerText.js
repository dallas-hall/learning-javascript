// Grab an element by its ID
var firstItem = document.getElementById('one');
// Show the textContent and innerText
var showTextContent = firstItem.textContent;
console.log(showTextContent);
var showInnerText = firstItem.innerText;
console.log(showInnerText);

// Create a string containing the textContent and innerText
var msg = '<p> textContent: ' + showTextContent + '</p>';
msg += '<p> innerText: ' + showInnerText + '</p>';
console.log(msg);

// Display results in the browser
var eScriptResults = document.getElementById('scriptResults');
// Add some HTML to the page
eScriptResults.innerHTML = msg;

// Update the text in the first list item
firstItem.textContent = 'sourdough bread';
