$(document).ready(function() {

	/* 
	
	GOALS

	- use addClass to update HTML elements with CSS on mouseenter / mouseleave

	*/

	// get items we want to use as our event listeners
	var mouseListeners = $('.transition');

	// confirm by logging to the console
	console.log( mouseListeners );

	// when the mouse enters the space created by a transitionItem ...
	mouseListeners.mouseenter( function(){
		// confirm action by logging to the console
		console.log('→ mouseenter');
		// add the background-img class to the body
		$('body').addClass('background-img');
	
	});

	// when the mouse enters the space created by a transitionItem ...
	mouseListeners.mouseleave( function(){
		// confirm action by logging to the console
		console.log('← mouseleave');
		// remove the background-img class from the body
		$('body').removeClass('background-img');

	});

});








