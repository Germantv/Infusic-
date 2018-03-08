'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	initialize();
});



$('#btn1, #btn2, #btn3').click(initialize);
$('#b1, #b2, #b3, #b4, #b5').click(initializePage);

function initialize(event) {
	console.log('song clicked');
	ga('send','event','song','click');
}

function initializePage(event) {
	console.log('button clicked');
	ga('send','event','button','click');
}

/*
 * Function that is called when the document is ready.
 */
 
