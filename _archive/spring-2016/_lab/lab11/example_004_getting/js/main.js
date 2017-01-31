$(document).ready(function() {
	
	$("#input-wrapper .button").click(function() {
		var key = $("#input-wrapper .key").val();

		/*
			getValue takes 2 parameters
			key (required)
			callback function (required)

			ClassDB.getValue( "key", function(data) {
	
			});
		*/
		ClassDB.getValue( key, function(data) {
			console.log( data );
			if( data && data.result == "success" ) {
				$("#wrapper .value").text( data.value );
			}
		});
	});
});