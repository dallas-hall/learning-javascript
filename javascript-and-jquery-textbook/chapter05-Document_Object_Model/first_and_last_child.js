// Get all the elements inside of <ul> and make it an array
var startItem = document.getElementsByTagName('ul')[0];
// Get the first child element of the <ul> document object
var firstChildItem = startItem.firstChild;
// Get the last child element of the <ul> document object
var lastChildItem = startItem.lastChild;

// Change the values of the children using setAttribute
firstChildItem.setAttribute('class', 'complete');
lastChildItem.setAttribute('class', 'cool');
/*firstChildItem.className = 'complete';
lastChildItem.className = 'cool';*/
