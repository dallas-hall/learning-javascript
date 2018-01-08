// Get the last item in a list of 4
var elementListItem = document.getElementsByTagName('li')[3];

// Get the parent node
var elementContainer = elementListItem.parentNode;

// Remove the element from the parent node
elementContainer.removeChild(elementListItem);