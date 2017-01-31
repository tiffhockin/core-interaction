$(document).ready(function() {
	
	$("#input-wrapper .button").click(function() {
		var key = $("#input-wrapper .key").val();
		var value = $("#input-wrapper .value").val();

		/*
			setValue takes 3 parameters
			key (required)
			value (required)
			callback function (required)

			ClassDB.setValue( "key", "my message", function(data) {
	
			});
		*/
		ClassDB.setValue( key, value, function(data) {
			console.log( data );
		});
	});
});