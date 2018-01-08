// Get a HTML element by its id attribute
var firstListItem = document.getElementById('one');
// Update its class attribute
firstListItem.className = 'complete';
// Get another HTML element by the tag and then index from the list
var fourthListItem = document.getElementsByTagName('li').item(3);
// Update its class attribute
fourthListItem.setAttribute('class', 'cool');