$(window).load(function(){
	$("#wrapper").animate({
		opacity: 1
	});
});

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

$(document).ready(function() {
	console.log("let's party.");

	$(window).mousemove(function(event) {
		// console.log("x: " + event.pageX + ", y: " + event.pageY);
		var thecolor = "rgba("+getRandomInt(0,255)+", "+getRandomInt(0,255)+", "+getRandomInt(0,255)+", "+Math.random()+")";
		
		$("body").css({
			backgroundColor: thecolor
		});
	});
});