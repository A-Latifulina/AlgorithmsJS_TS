//get list first item
var firstItem = document.getElementById('one');

//if it has a class attribute, get the attribute
if (firstItem.hasAttribute('class')) {
    var attr = firstItem.getAttribute('class');

    //add the value of the attribute after the list
    var el = document.getElementById('scriptResults');
    el.innerHTML = '<p> The first item has a class name: ' + attr + '</p>';
}