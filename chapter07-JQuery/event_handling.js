/*
This code will add some text to the list when the mouse goes over it or clicks on it.
Once the mouse leaves the list item, the text will be removed.
 */

$(function () {
	// Create some variables
	var ids = '';
	var $listItems = $('li');

	// Add two event listeners to the jQuery object
	$listItems.on('mouseover click', function () {
		// Get the current list element id
		ids = this.id;
		// Remove any spans inside of it
		$listItems.children('span').remove();
		// Add a new span with the current id
		$(this).append(' <span class="priority">(' + ids + ')</span>');
	});

	// Add another event listener
	$listItems.on('mouseout', function () {
		// Remove the span again, just in case
		$(this).children('span').remove();
	});
});