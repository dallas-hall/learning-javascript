// Get all li elements
var eTagList = document.getElementsByTagName('li');

// Change all their colours
for (i = 0; i < eTagList.length; i++) {
	eTagList.item(i).className = 'warm';
}