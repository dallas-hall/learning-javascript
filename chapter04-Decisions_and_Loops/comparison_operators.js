var passMark = 50;
var studentScore = 90;

var hasPassed = studentScore >= passMark;

var eResult = document.getElementById('answer');
eResult.textContent = 'Level passed: ' + hasPassed;