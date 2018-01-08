// Get the second item in the list
var startItem = document.getElementById('two');
// The previous item in the list from item 2, item 1
var prevItem = startItem.previousSibling;
// The next item in the list from item 2, item 3
var nextItem = startItem.nextSibling;

// Change the values of the previous and next siblings
prevItem.className = 'complete';
nextItem.className = 'cool';