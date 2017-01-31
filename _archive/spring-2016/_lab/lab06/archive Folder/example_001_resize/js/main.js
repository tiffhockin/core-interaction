$(document).ready(function() {
	
	$(window).resize(function() {
		var width = $(window).width();
		var height = $(window).height();

		var size_string = "width: " + width + ", height: " + height;
		
		$("h1 span").text( size_string );
	});

});