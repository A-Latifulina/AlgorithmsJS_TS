//querySelector() returns onyl the firstmatch
var el = document.querySelector('li.hot');
el.className = 'cool';

//querySelector returns a NodeList 
// the second matching element (3rd list item) is selected and changed
var els = document.querySelectorAll('li.hot');
els[1].className = 'cool';