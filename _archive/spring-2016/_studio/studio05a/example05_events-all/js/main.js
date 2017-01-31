$(document).ready(function() {
	
	/* 

	GOALS

	- capture a mouse event to toggle display of items by adding/removing .class
	- capture window.resize event, add class to body
	- capture window.scroll event, add class to body
	- capture window.keypress and window.keyup events, add class to body

	*/

	// p#status, so we can note events as they happen
	var status = $('#status');

	// store mouse event trigger item in a variable
	var hoverTrigger = $('#hover-trigger');

	// mouse enter & mouse leave to change body class
	hoverTrigger.mouseenter(function(){
		// reset body class list
		$('body').attr('class','');
		// add .reveal
		$('body').addClass('reveal');

		// notes to self
		console.log('mouseenter');
		status.text('mouseenter');

	})

	/* ------------------------------
		mouseenter, mouseleave
	------------------------------ */
	hoverTrigger.mouseleave(function(){
		// remove .reveal from body
		$('body').removeClass('reveal');

		// notes to self
		console.log('mouseleave');
		status.text('mouseleave');

	})

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
	})

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







