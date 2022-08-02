$(function () {
	// Get all the list items and go through them all
	$('li').each(function () {
		// Get their current id
		var ids = this.id;
		// Add some text after the element content, which is before the closing tag
		$(this).append(' <span class="order">id="' + ids + '"</span>')
	});
});