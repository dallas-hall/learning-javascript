// Variables
var msg;
var level = 2;

// Conditional statement
switch (level) {
    case 1:
        msg = 'Round 1, FIGHT! The beginning of a new adventure.';
        break;

    case 2:
        msg = 'Round 2, FIGHT! Still here huh?';
        break;

    case 3:
        msg = 'Final round, fight!';
        break;

    default:
        msg = 'Good luck on your travels.';
}

var eAnswer = document.getElementById('answer');
eAnswer.textContent = msg;