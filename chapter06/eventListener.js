function checkUsername() {                                      //declare function
    var elMsg = document.getElementById('feedback');            //get feedback element
    if (this.value.length < 5) {                                //if username <5
        elMsg.textContent = 'Username must be = or > 5 char';   //set msg
    }   else {  
        elMsg.textContent = '';                                 //else clear msg
    }
}

var elUsername = document.getElementById('username');           //get username input
elUsername.addEventListener('blur', checkUsername, false);      //when it loses fous call userName()

//omit () in event listener bc it shouldn't run when the page loads, but instead when the event fires
