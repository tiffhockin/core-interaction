var count = 0;
$(document).ready(function() {
	console.log("let's party.");

	$(window).resize(function(){
		console.log("RESIIZING! count: " + count);
		count = count + 1;
	});

	$(".redact").mouseenter(function(){
		$(".redact").addClass("on");
	}).mouseleave(function(){
		$(".redact").removeClass("on");
		$(".redact").addClass("left");
	});
});