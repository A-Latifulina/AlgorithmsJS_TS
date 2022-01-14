var pass = 50;
var scopre = 90;

//check is user passed the score
var hasPassed = score >= pass;

val el = document.getElementById('answer');
el.textContent = 'Level passed: ' + hasPassed;
