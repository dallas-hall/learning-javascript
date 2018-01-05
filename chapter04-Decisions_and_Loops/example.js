// Create variables
var value = 3;
var operator = 'multiplication';
var i = 1;
var msg = '';

// Do the calculations with loops
if (operator === 'multiplication') {
	// while loop
	while (i <= 10) {
        msg += i + ' * ' + value + ' = ' + (i * value) + '<br>';
        i++;
    }
} else if (operator === 'division') {
	// do while
	do {
		msg += i + ' / ' + value + ' = ' + (i / value) + '<br>';
		i++;
	} while (i <= 10);
} else if (operator === 'addition') {
	// for loops
	for (i; i <= 10; i++) {
		msg += i + ' + ' + value + ' = ' + (i + value) + '<br>';
	}
} else {
	for (i; i <= 10; i++) {
		msg += i + ' - ' + value + ' = ' + (i - value) + '<br>';
	}
}


// Add another message
msg += '<br>Math be done diddly done!';

// Write the result to the page
var eBlackboard = document.getElementById('blackboard');
eBlackboard.innerHTML = msg;