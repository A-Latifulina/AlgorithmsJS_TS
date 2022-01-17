var scores = [5, 10, 15];           //array of scores
var arrayLength = scores.length;    //items in array
var roundNumber = 0;                //current round
var msg = '';                       //msg
var i;                              //counter

//loops through the items in the array
for (i = 0; i < arrayLength; i++) {

    //arrays are zero based, so 0 ir round 1
    //add 1 to the current rount
    roundNumber = (i + 1);

    //write the current round to msg
    msg += 'Round ' + roundNumber + ': ';

    //get the scores from the scores array
    msg += scores[i] + '<br />';
}

document.getElementById('answer').innerHTML = msg;
