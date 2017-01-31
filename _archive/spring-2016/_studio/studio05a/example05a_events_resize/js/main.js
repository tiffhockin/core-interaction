$(document).ready(function() {
	
	/* 

	GOALS

	- capture window.resize event, add class to body

	*/

	// p#status, so we can note events as they happen
	var status = $('#status');

	/* ------------------------------
		resize
	------------------------------ */
	$(window).resize(function(){
		// reset body class list
		$('body').attr('class','');
		// add .resize to body
		$('body').addClass('resize');

		// notes to self
		console.log('window resize');
		status.text('window resize');
	});

});







