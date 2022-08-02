// 1) create an anonymous function inside a jQuery
$(function () {
	/*
	2.1) find the list item(s) that contain the word pine
	2.2) Change the text to something else
	*/
	$('li:contains("pine")').text('MEGA PINE');
	/*
	3.1) Find the list items with the class hot
	3.2) Change the content of them with html()
	3.3) Use an anonymous function and put the current element inside a new jQuery object so we can use jQuery methods
	 on it, the function returns a string to be used by html()
	*/
	$('li.hot').html(function() {
		return '<em>' + $(this).text() + '</em>';
	});
	/*
	4.1) Find the list item with the id of one
	4.2) Delete that item
	 */
	$('li#one').remove();
});