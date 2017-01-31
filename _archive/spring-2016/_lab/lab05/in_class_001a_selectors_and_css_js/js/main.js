function doSomething() {
	console.log("you are mousing over a span tag");
}

$(document).ready(function() {

	/*
		1) on mouse enter (when someone hovers their mouse over the span tag)
		2.1) add a class to body
		3) that class will change the background color

	*/

	// 1)
	$(".one").mouseenter(function(){
		console.log("you are mousing over a span tag");

		// 2)
		$("body").addClass("stinky");
	});

	$(".two").mouseenter(doSomething);

	// $(".one").mouseenter(function(){
	// 	$("body").css({
	// 		backgroundColor: "red"
	// 	});
	// }).mouseleave(function(){
	// 	$("body").css({
	// 		backgroundColor: "white"
	// 	});
	// });

	// $(".two").mouseenter(function(){
	// 	$("body").css({
	// 		backgroundColor: "blue"
	// 	});
	// }).mouseleave(function(){
	// 	$("body").css({
	// 		backgroundColor: "white"
	// 	});
	// });

	
});