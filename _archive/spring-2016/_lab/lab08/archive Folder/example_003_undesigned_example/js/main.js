// needed to receive chat
function newChat( username, text, special ) {
	var el = $("<p/>");

	var new_string = username + ": " + text;
	
	$(el).text( new_string );
	
	$("#chat-history").append( el );
}

$(document).ready(function() {
	$("#chat-input-wrapper .chat-button").click(function(){
		var input_username = $("#chat-input-wrapper .chat-username").val();
		var input_text = $("#chat-input-wrapper .chat-input").val();

		ClassChat.sendChat( input_username, input_text, "" );
		$("#chat-input-wrapper .chat-input").val("");
	});

	// needed to start chat
	ClassChat.start();
});