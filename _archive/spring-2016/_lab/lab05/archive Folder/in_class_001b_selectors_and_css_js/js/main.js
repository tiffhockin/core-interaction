function doSomething() {
	console.log("you are mousing over a span tag");
}

$(document).ready(function() {

	/*
		1) on mouse enter (when someone hovers their mouse over the span tag)
		2.2) change the css with javascript

	*/

	// 1)
	$(".one").mouseenter(function(){
		console.log("you are mousing over a span tag");

		// 2)
		$("body").css({
			"background-color": "red"
		});
	});

	$(".one").mouseleave(function(){
		console.log("you are mousing over a span tag");

		// 2)
		$("body").css({
			"background-color": "white"
		});
	});


	// $(".one").mouseenter(function(){
	// 	$("body").css({
	// 		backgroundColor: "red"
	// 	});
	// }).mouseleave(function(){
	// 	$("body").css({
	// 		backgroundColor: "white"
	// 	});
	// });
});