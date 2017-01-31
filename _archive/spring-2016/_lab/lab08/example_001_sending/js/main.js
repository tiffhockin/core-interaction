$(document).ready(function() {
	
	$("#chat-input-wrapper .chat-button").click(function() {
		
		var input_username = $("#chat-input-wrapper .chat-username").val();
		var input_text = $("#chat-input-wrapper .chat-input").val();

		/*
			sendChat takes 3 parameters
			username (required)
			text (required)
			special (optional) but I send "" as a place holder

			ClassChat.sendChat( "my_name", "my message", "special_whatever" );
		*/
		//ClassChat.sendChat( input_username, input_text, "" );
		ClassChat.sendChat( "chrisallick", input_text, "" );
	});
});