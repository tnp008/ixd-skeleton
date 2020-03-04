'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".google").click(clickGoogle);
}
function clickGoogle(e){
	e.preventDefault();
	ga('create', 'UA-159639041-1', 'auto');
	ga("send", "event", 'like', 'click');
}
