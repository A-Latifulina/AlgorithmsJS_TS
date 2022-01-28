var elements = document.getElementsByTagName('li');  //find hot items

if (elements.length > 0) {      //if 3 or more elements are found
    var el = elements[0];       //select the 3rd one from the NodeList
    el.className = 'cool';      //change the value of it's class attribute
}