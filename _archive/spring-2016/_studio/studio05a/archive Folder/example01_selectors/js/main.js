$(document).ready(function() {

	/* 
	
	GOALS

	- target HTML elements in various ways using jQuery
	- use jQuery addClass to change something via CSS

	*/

	// select an individual HTML object
	var par1 = $('#par-1');
	
	// target all span tags <span>
	var allSpans = $('span');

	// target all instances of .highlighted
	var highlighted = $('.highlighted');

	// confirm that we've gotten our target HTML objects
	console.log( 'par1', par1 );
	console.log( 'allSpans', allSpans );
	console.log( 'highlighted', highlighted );

	// use addClass to change something via CSS in two different ways

	// 1. change a single thing
	par1.addClass('highlighted');

	// 2. change multiple things
	allSpans.each( function(){
		$(this).addClass('highlighted')
	});

});








