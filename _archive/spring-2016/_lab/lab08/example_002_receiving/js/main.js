function strip(html) {
   return jQuery('<p>' + html + '</p>').text();
}

// needed to receive chat
// what you do with this information
// is totally up to you!
function newChat( username, text, special ) {
	// strip removes html from the string
	var new_string = strip(username) + ": " + strip(text) + "<br/>";

	if( special == "image" ) {
		var new_string = "<img src='"+text+"' />";
	}

	$("#chat-history").append( new_string );
	
}

$(document).ready(function() {
	$("#chat-input-wrapper .chat-button").click(function(){
		var input_username = $("#chat-input-wrapper .chat-username").val();
		var input_text = $("#chat-input-wrapper .chat-input").val();

		// username, text, special
		ClassChat.sendChat( input_username, input_text, "" );
	});

	// needed to start chat
	ClassChat.start();
});


