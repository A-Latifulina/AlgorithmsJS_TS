var listItems = document.querySelectorAll('li');

//add a class of cool to all list items
var i;
for (i = 0; i < listItems.length; 1++) {
    listItems[i].className = 'cool';
}

//add number of items in the list to the headings
var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + '<span>' + totalItems + '</span>';
heading.textContent = newHeading;