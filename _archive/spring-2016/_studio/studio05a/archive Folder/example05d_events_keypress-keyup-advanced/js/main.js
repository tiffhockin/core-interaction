$(document).ready(function() {
	
	/* 

	GOALS

	- capture window.keypress and window.keyup events, add class to body

	*/

	// p#status, so we can note events as they happen
	var status = $('#status');

	/* ------------------------------
		keypress, keyup
	------------------------------ */

	$(window).keypress(function(){
		// reset body class list
		$('body').attr('class','');
		// add .keypress to body
		$('body').addClass('keypress');

		// notes to self
		console.log('window keypress');
		status.text('window keypress');

	})

	// pass the keypress event to our keypress function
	$(window).keyup(function(event){
		// reset body class list
		$('body').attr('class','');
		// add .keyup to body
		$('body').addClass('keyup');

		// notes to self
		console.log('window keyup');
		status.text('window keyup');

		// left arrow
		if ( event.keyCode == 37 ) {
			status.text('<-- left arrow');
			$('body').addClass('left');
		}

		// right arrow
		if ( event.keyCode == 39 ) {
			status.text('--> right arrow');
			$('body').addClass('right');
		}

		// spacebar
		if ( event.keyCode == 32 ) {
			status.text('----- space');
			$('body').addClass('space');
		}

	})


});







