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

	$(window).keyup(function(){
		// reset body class list
		$('body').attr('class','');
		// add .keyup to body
		$('body').addClass('keyup');

		// notes to self
		console.log('window keyup');
		status.text('window keyup');

	})


});







