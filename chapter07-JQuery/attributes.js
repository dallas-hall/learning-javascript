$(function () {
	/*
	1.1) Get the list item with the id three
	1.2) Remove it's class value of hot
	 */
	$('li#three').removeClass('hot');
	/*
	2.1) Get the list item with the class hot
	2.1) Add a class called favorite
	 */
	$('li.hot').addClass('favorite');
	// Create a jQuery variable that has a jQuery object of the unordered list
	var $unorderedList = $('ul');
	// 3) Add 3 attributes to the jQuery object in the jQuery variable
	$unorderedList.attr('id', 'group', 'penis');
	// 4) Remove an attribute from the jQuery object in the jQuery variable
	$unorderedList.removeAttr('penis');
});