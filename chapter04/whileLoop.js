var i = 1;
var msg = '';

//store 5 times table in the var
while (i < 10) {
    msg += i + ' x 5 = ' + (i * 5) + '<br />';
    i ++;
}

document.getElementById('answer').innerHTML = msg
