// Get the first list item via its id attribute
var firstListItem = document.getElementById('one');

// Check if a class attribute exists
if (firstListItem.hasAttribute('class')) {
	console.log(firstListItem.hasAttribute('class'));

	// If it does, store it
	var firstListItemAttribute = firstListItem.getAttribute('class');
	console.log(firstListItemAttribute);

	// Add the attribute to an element after the list, showing its contents
	var elementScriptResults = document.getElementById('scriptResults');
	elementScriptResults.innerHTML = '<p>The first item has a class name of:' +
		' ' + firstListItemAttribute + '</p>';
}

