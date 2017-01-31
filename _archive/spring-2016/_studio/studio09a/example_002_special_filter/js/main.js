// format incoming messages and add them to #chat-history
function newChat( username, text, special ) {

	// GOAL
	// only display messages sent from MY program
	// (using special tag "my_chat_filter")

	// if the content of special matches "my_chat_filter", 
	// display the text
	if ( special == "my_chat_filter" ) {
		
		// select HTML element you want to wrap your message in
		// alternatives might be: <span>, <div>
		var el = $("<p>");

		// construct the string of text we see in chat history
		var new_string = username + ": " + text;
		
		// place the text inside the element we just created
		$(el).text( new_string );
		
		// append the newly created element to #chat-history div
		$("#chat-history").append( el );

	} else {
		// do nothing
	}

}

// wait until all elements on the page have loaded,
// then run the code inside document.ready
$(document).ready(function() {

	// look for .chat-button, listen for clicks
	$("#chat-input-wrapper .chat-button").click(function(){

		// get the user name from .chat-username <input>, store it in input_username
		var input_username = $("#chat-input-wrapper .chat-username").val();

		// get message from .chat-input, store it in input_text
		var input_text = $("#chat-input-wrapper .chat-input").val();

		// call the sendChat function
		// pass our username, message, and special parameter
		ClassChat.sendChat( input_username, input_text, "my_chat_filter" );

		// clear the input field
		$("#chat-input-wrapper .chat-input").val("");

	});

	// needed to start chat
	ClassChat.start();

});







