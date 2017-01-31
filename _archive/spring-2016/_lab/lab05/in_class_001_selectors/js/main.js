function doSomething() {
	console.log("you are mousing over a span tag");
}

function doSomethingElse() {
	console.log("you are mousing over a span else tag");
}

$(document).ready(function() {

	/*
		1) on mouse enter (when someone hovers their mouse over the span tag)
		2) add a class to body
			2a) that class will change the background color
	*/

	// 1)
	$(".one").mouseenter(function(){
		console.log("you are mousing over a span tag");
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