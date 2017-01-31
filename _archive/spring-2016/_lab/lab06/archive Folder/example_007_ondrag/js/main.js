$(document).ready(function() {
	$( "#dragthing" ).draggable().on("drag", function(event) {
		console.log("dragging!");
	});
});