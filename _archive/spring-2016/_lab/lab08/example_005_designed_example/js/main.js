function scrollDown() {
	$("#chat-history").animate({ scrollTop: $('#chat-history').prop("scrollHeight")}, 250);
}

function newChat( username, text, special ) {
	clearTimeout( t );
	
	var el = $("<p/>");

	var new_string = username + ": " + text;
	
	$(el).text( new_string );
	
	$("#chat-history").append( el );

	t = setTimeout(scrollDown,250);
}

var t;
$(document).ready(function() {
	$("#chat-input-wrapper .chat-button").click(function(){
		var input_username = $("#chat-input-wrapper .chat-username").val();
		var input_text = $("#chat-input-wrapper .chat-input").val();

		ClassChat.sendChat( input_username, input_text, "" );
		$("#chat-input-wrapper .chat-input").val("");
	});

	ClassChat.start();
});