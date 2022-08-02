// Get the second list item
var itemTwo = document.getElementById('two');
// Get the second list item's node value, which is the text in that node
var eText = itemTwo.firstChild.nodeValue;

// Replace the string with another string
eText = eText.replace('pine nuts', 'kale balls');
// Update the element text
itemTwo.firstChild.nodeValue = eText;