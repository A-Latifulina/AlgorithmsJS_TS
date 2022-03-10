//example of adding items to start and end of list
var list = document.getElementsByTagName('ul')[0];

//add new item to end of list
var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('cream');
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

//add new item to start of list
var newItemFirst = document.createElement('li');
var newItemFirst = document.createTextNode('kale');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild);