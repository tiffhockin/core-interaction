$(document).ready(function() {
	
	/* 

	GOALS

	- capture window.scroll event, add class to body

	*/

	// p#status, so we can note events as they happen
	var status = $('#status');

	/* ------------------------------
		scroll
	------------------------------ */
	$(window).scroll(function(){
		// reset body class list
		$('body').attr('class','');
		// add .scroll to body
		$('body').addClass('scroll');

		// notes to self
		console.log('window scroll');
		status.text('window scroll');
	})

});







