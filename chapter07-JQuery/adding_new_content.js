// Create a jQuery object that has an anonymous function inside of it
$(function() {
	/*
	1.1) Get the unordered list element
	1.2) Insert something before the first element
	 */
	$('ul').before('<p class="notice">Just Updated Yo</p>');
	/*
	2.1) Get the list item with the class hot
	2.2) Insert a string after its opening tag
	 */
	$('li.hot').prepend('notepad++ ');
	// 3) Create a jQuery variable with a new element stored in a jQuery object
	var $newListItem = $('<li><em>gluten free</em></li>');
	// 4) Insert a string before its closing tag
	$newListItem.append(' gluten');
	/*
	5.1) Get the list item with the id of last
	5.2) Insert the new element from the jQuery object after its closing tag
	 */
	$('li:last').after($newListItem);
});