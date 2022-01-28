var elements = document.getElementsByClassName('hot');  //find hot items

if (elements.length > 2) {      //if 3 or more elements are found
    var el = elements[2];       //select the 3rd one from the NodeList
    el.className = 'cool';      //change the value of it's class attribute
}
