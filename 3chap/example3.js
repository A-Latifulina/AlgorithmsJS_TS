//PART 1: create hotel object & write out the offer details

(function() {

//create hotel object using object literal syntax
var hotel = {
    name: 'Park',
    rooRate: 250,   //$
    discount: 15,    //%
    offerPrice: function() {
        var offerRate = this.rooRate * ((100 - this.discount) / 100);
        return offerRate;
    }
}

//write out the hotel name, standard rate, and the special rate
var hotelName, roomRate, specialRate;                   //declare variables

hotelName = document.getElementById('hotelName');       //get elements
roomRate = document.getElementById('roomRate');
specialRate = document.getElementById('specialRate');

hotelName.textContent = hotel.name;                     //write hotel name
roomRate.textContent = '$' + hotel.rooRate.toFixed(2);  //write room rate
specialRate.textContent = '$' + hotel.offerPrice();     //write offer price

//PART 2: calculate and write out the expiry details of the offer
var expiryMsg;  //msg displayed to users
var today;      //today's date
var elEnds;     //the element that shows the message about the offer ending

function offerExpires(today) {
    //declare variable within the function for local scope
    var weekFromToday, day, date, month, year, dayNames, monthNames;
    //add 7 days time (added in milliseconds)
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    //create arrays to hold the names of the days/months
    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    monthNames = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec'];
    //collect the parts of the date to show on the page
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    months = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();
    //create the msg
    expiryMsg = 'Offer expires next ';
    expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
    return expiryMsg;
}

today = new Date();                             //put today's date in variable
elEnds = document.getElementById('offerEnds');  //get the offerEnds element
elEnds.innerHTML = offerExpires(today);         //add the expiry msg

//finish the immediately invoked function expression
}());