var i = 1;
var msg = '';

//store 5 times table in the var
do {
    msg += i + ' x 5 = ' + (i * 5) + '<br />';
    i ++;
}   while (i < 1);
//statement is listed before 'while' and is executed once

document.getElementById('answer').innerHTML = msg;
