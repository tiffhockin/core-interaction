$(document).ready(function() {

	$(".one").mouseenter(function(){
		$("#box").animate({
			opacity: 1,
			left: 20
		}, function(){
			$("#box").animate({
				top: 100
			}, function(){
				$("#box").animate({
					opacity: 0
				});
			});
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