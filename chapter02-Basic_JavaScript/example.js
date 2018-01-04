var greeting = 'Good day ';
var name = "Molly";
var message = ", plz chk ur orda!";
var welcome = greeting + name + message;

var sign = "Hana Montana House";
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

var eGreet = document.getElementById('greeting');
eGreet.textContent = welcome;

var eSign = document.getElementById('userSign');
eSign.textContent = sign;

var eTiles = document.getElementById('tiles');
eTiles.textContent = tiles;

var eSubTotal = document.getElementById('subTotal');
eSubTotal.textContent = '$' + subTotal;

var eShipping = document.getElementById('shipping');
eShipping.textContent = '$' + shipping;

var eGrandTotal = document.getElementById('grandTotal');
eGrandTotal.textContent = '$' + grandTotal;