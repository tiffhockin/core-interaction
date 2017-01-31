$(document).ready(function() {
	
	/* 

	GOALS

	1. target 4 special HTML items
	2. add class to change 1st special item's position via CSS
	3. wait for window to load, then add class to change 2nd special item's position via CSS
	4. animate 3rd special item's position via jQuery
	5. count to 2, then change 4th special item's position via jQuery (no animation)

	*/

	// 1. target 4 special HTML items
	var circle1 = $('#circle-1'); // yellow
	var circle2 = $('#circle-2'); // green
	var circle3 = $('#circle-3'); // red
	var circle4 = $('#circle-4'); // pink


	// 2. add class to change 1st special item's position via CSS
	// new top/left position is stored in .position-1 class
	circle1.addClass('position-1');

	console.log('#circle-1 has class position-1; transition effect applied via CSS');

	// 3. wait for window to load ...
	$(window).load(function(){

		// add class to change 2nd special item's position via CSS
		circle2.addClass('position-2');

		console.log('#circle-2 has class position-2; transition effect applied via CSS');

	});

	// 4. animate 3rd special item's position via jQuery
	circle3.animate({
		'top' : '50%',
		'left' : '50%'
		// animation will run for 4 seconds
	}, 4000 );

	console.log('#circle-3 animated with jQuery; transition effect applied via jQuery animation');

	// 5. count to 2 ...
	setTimeout( function(){
		// then change 4th special item's position via jQuery (no animation)
		circle4.css({
			'top' : '80%',
			'left' : '80%'
		});

		console.log('#circle-4 moved with jQuery; no transition effect');

	// 2000 milliseconds = 2 seconds
	}, 2000 );

}); 