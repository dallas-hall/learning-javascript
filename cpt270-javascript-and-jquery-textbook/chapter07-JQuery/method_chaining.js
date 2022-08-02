/*
1) Get the list items that aren't the first one
2) Hide them
3) Pause the script
4) Slowly fade the elements into view
*/
$('li[id!="one"]').hide().delay(1000).fadeIn(2000);