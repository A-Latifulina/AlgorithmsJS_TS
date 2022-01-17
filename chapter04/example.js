var table = 3;                          //unit of table
var operator = 'addition';              //type of calculation, default addition
var i = 1;                              //set counter to 1
var msg = '';                           //msg

if (operator === 'addition') {          //if the operator says addition
    while (i < 11) {
        msg += i + ' + ' + table + ' = ' + (i + table) + '<br>';  //calculation
        i++;                            //add 1 to the counter
    }
}   else {
    while (i < 11) {
        msg += i + ' x ' + table + ' = ' + (i * table) + '<br>';   //calculation
        i ++;                           //add 1 to the counter
    }
}

//write msg into the pg
var write = document.getElementById('blackboard');
write.innerHTML = msg;
