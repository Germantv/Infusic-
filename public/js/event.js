'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('#btn1, #btn2, #btn3').click(function() {
		ga('send', 'event', 'songs', 'click');
	});
	$('#b1, #b2, #b3, #b4, #b5').click(function() {
		ga('send', 'event', 'button', 'click');		
	});
}

