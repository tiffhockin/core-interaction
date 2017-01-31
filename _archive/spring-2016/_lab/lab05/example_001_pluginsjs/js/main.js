$(document).ready(function() {
	var r = getRandomInt( 0, 255 );
	var g = getRandomInt( 0, 255 );
	var b = getRandomInt( 0, 255 );
	var a = Math.random();


	$("h1").css({
		"color": "rgba( " + r + ", " + g + ", " + b + ", " + a + " )"
	});
});