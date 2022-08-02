var firstListItem = document.getElementById('one');
var listItemContent = firstListItem.innerHTML;
firstListItem.innerHTML =  '<a href=\"http://example.org\">' + listItemContent + '</a>';