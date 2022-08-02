// @@@ GET ALL ITEMS FROM THE EXISTING LIST @@@
// Get the first element in the NodeList for all <ul> tags
// Note: there is only one in the HTML
var list = document.getElementsByTagName('ul')[0];

// @@@ ADD A NEW ITEM TO THE END OF THE LIST @@@
// Create a new list item and its text content
var newListItemElement = document.createElement('li');
var newListItemText = document.createTextNode('cream pie');
// Add the text item to the new list item
newListItemElement.appendChild(newListItemText);
// Add the new list item to the existing list
list.appendChild(newListItemElement);

// @@@ ADD A NEW ITEM TO THE START OF THE LIST @@@
// Reset the objects
newListItemElement = null;
newListItemText = null;
// Create a new list item and its text content
newListItemElement = document.createElement('li');
newListItemText = document.createTextNode('moar kale ballz');
// Add the text item to the new list item
newListItemElement.appendChild(newListItemText);
// Insert this new list item before the list's current first item (child)
list.insertBefore(newListItemElement, list.firstChild);

// @@@ GET ALL LIST ITEMS FROM THE EXISTING LIST @@@
// Note: there is only one in the HTML
var allListItems = document.querySelectorAll('li');
// Add the class of cool ot all the list items
for (i = 0; i < allListItems.length; i++) {
	allListItems.item(i).className = 'cool';
}

// Get the h2 element
var heading2 = document.querySelector('h2');
// Get the h2 element's text value
var headingText = heading2.firstChild.nodeValue;
// Get the number of list items
var totalListITems = allListItems.length;
// Create a new head
var newHeadingText = headingText + '<span>' + totalListITems + '</span>';
// Update the old heading
heading2.textContent = newHeadingText;