$(document).ready(function() {
	console.log("let's party.");

	$(".redact").mouseenter(function(){
		$(this).addClass("on");
	}).mouseleave(function(){
		$(this).removeClass("on");
	});
});