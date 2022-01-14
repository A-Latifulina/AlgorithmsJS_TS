//create the array
var colors = ['white', 'black', 'custom'];

//update the third item
colors[2] = 'green'

//get the element with an id of colors
var el = document.getElementById('colors');

//replace with the third item from the array
el.textContent = colors[2]