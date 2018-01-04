var price = 5;
var quantity = 14;
var total = price * quantity;

// Get an element from the document using its id attribute
var answer = document.getElementById('cost');
// Update the elements text
answer.textContent = '$' + total;