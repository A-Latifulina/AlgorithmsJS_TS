//create new element and it in a var
var newEl = document.createElement('li');

//create a text node and store in a var 
var newText = document.createTextNode('rice');

//attach the new text node to the new element
newEl.appendChild(newText);

//find the position where the new element should be added
var position = document.getElementsByTagName('ul')[0];

//insert the new element into its position
position.appendChild(newEl);