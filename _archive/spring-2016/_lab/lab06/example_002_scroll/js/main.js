var timeout;
// var start_in_the_future;
$(document).ready(function() {

	// start_in_the_future = setTimeout(function(){
	// 	console.log("cool");
	// }, 2000);
	// clearTimeout( start_in_the_future );
	
	$(window).scroll(function() {
		clearTimeout( timeout );
		
		$("h1").text("scrolling!");
		
		// wait 250 milliseconds
		// then do the stuff in the function
		timeout = setTimeout(function(){
			$("h1").text("not scrolling!");
		}, 250);
	});

	$("#wrapper p").each(function(index,value) {
		
		// the instance of the p tag
		// you're on for now
		$(this).text($(this).text() + " " + index);
	
	});
});