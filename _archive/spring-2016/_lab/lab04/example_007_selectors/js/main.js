$(document).ready(function() {
	console.log("let's party.");

	$(window).resize(function(){
		var color = "rgba(75, 181, 248, "+Math.random()+")";
		
		$("body").css({
			backgroundColor: color
		})
	})

	$(".redact").mouseenter(function(){
		$(this).addClass("on");
	}).mouseleave(function(){
		$(this).removeClass("on");
		$(this).addClass("left");
	});
});