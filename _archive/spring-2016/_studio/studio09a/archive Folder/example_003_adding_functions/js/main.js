// format incoming messages and add them to #chat-history
function newChat( username, text, special ) {

	// select HTML element you want to wrap your message in
	// alternatives might be: <span>, <div>
	var el = $("<p>");

	// construct the string of text we see in chat history
	var new_string = username + ": " + text;
	
	// place the text inside the element we just created
	$(el).text( new_string );
	
	// append the newly created element to #chat-history div
	$("#chat-history").append( el );

}


// example: log text to the console
function someFunction( input_text ) {

	console.log( input_text )

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
		// pass our username, message, and special parameter (if any)
		ClassChat.sendChat( input_username, input_text, "" );
		
		// call another function when we send a new chat
		someFunction( input_text );

		// clear the input field
		$("#chat-input-wrapper .chat-input").val("");

	});

	// needed to start chat
	ClassChat.start();

});












