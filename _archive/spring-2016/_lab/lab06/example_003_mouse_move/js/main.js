$(document).ready(function() {
	// e or event or whatever you want to call it
	// but pageX and pageY are a must have.
	$(window).mousemove(function(e) {
		var position_string = "x: " + e.pageX + ", y: " + e.pageY;

		$("h1 span").text( position_string );
	});
});