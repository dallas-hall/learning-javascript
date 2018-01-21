$(function() {
	// Store the list item as a jQuery object in a jQuery variable
	var $listItem = $('li');
	// Add new content before the last closing tag in in the unordered list
	$('ul').append('<p>Background colour was: ' + listItem.css('background-color') + '</p>');
	// Set multiple CSS properties at once
	$listItem.css({
		'background-color': '#c5a996'
		,'border': '1px solid #fff'
		,'color': '#000'
		,'font-family': 'Georgia'
		,'padding-left': '+=75'
	});
});