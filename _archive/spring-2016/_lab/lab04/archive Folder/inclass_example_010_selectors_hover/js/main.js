$(document).ready(function() {

	$(".one").mouseenter(function(){
		$("body").css({
			backgroundColor: "red"
		});
	}).mouseleave(function(){
		$("body").css({
			backgroundColor: "white"
		});
	});

	$(".two").mouseenter(function(){
		$("body").css({
			backgroundColor: "blue"
		});
	}).mouseleave(function(){
		$("body").css({
			backgroundColor: "white"
		});
	});
});