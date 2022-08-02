// Create variables for the score and pass values
var score1 = 8;
var score2 = 5;
var pass1 = 6;
var pass2 = 6;

// Check score against pass
var passedBoth = false;
var passedOne = false;
if ((score1 >= pass1) && (score2 >= pass2)) {
    passedBoth = true;
} else if ((score1 >= pass1) || (score2 >= pass2)) {
    passedOne = true;
}

// Create a message for the web page
var msg;
if (passedBoth) {
    msg = 'Both rounds passed!'
}
else if (passedOne) {
    msg = 'Passed one round, try again!'
}
else {
    msg = 'You suck, try again.'
}

// Write the message to the web page
var eAnswer = document.getElementById('answer');
eAnswer.textContent = msg;