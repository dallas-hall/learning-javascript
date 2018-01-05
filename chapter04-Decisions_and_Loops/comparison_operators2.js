// Round 1 and 2 scores and high scores
var score1 = 90;
var score2 = 95;
var highScore1 = 75;
var highScore2 = 95;

// Check if the scores are higher than the current high scores
var compareScores = (score1 + score2) > (highScore1 + highScore2);

// Write result to the page
var eAnswer = document.getElementById('answer');
eAnswer.textContent = 'New high score: ' + compareScores;

