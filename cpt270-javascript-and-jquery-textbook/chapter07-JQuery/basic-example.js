// 1) Select all headings and add class="headline"
$(':header').addClass('headline');

/* 2) Get the first 3 list items, hide them, then bring them into view
after 2500 milliseconds*/
$('li:lt(3)').hide().fadeIn(2500);

/* 3) Create a click event listener on the list items. This will remove
items from the page when they are clicked */
$('li').on('click', function() {
	$(this).remove();
});