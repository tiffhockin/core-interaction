$(document).ready(function() {
	$("#input-wrapper .button").click(function() {
		var key = $("#input-wrapper .key").val();
		console.log( key );
	});

	$("#input-wrapper").submit(function(event){
		event.preventDefault();

		var key = $("#input-wrapper .key").val();
		console.log( key );
	});
});