var elements = document.getElementsByTagName('li');  //find <li> elements

if (elements.length > 0) {      //if 1 or more are found
    var el = elements[0];       //select the 1st one using array syntax
    el.className = 'cool';      //change the value of it's class attribute
}
