// Use CSS Selector to the first matching object
var eLiHot = document.querySelector('li.hot');
eLiHot.className = 'cool';

// Use CSS Selector to get all matching objects as NodeList
// This works but getElementsByClass doesn't?????
var eLiHotObjects = document.querySelectorAll('li.hot');
for (i = 0; i < eLiHotObjects.length; i++) {
	eLiHotObjects[i].className = 'cool';
}
