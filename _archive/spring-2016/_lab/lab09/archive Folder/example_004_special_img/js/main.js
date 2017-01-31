// format incoming messages and add them to #chat-history
function newChat( username, text, special ) {

	var chat_img = "";
	var chat_img_el = "";

	// select HTML element you want to wrap your message in
	// alternatives might be: <span>, <div>
	var el = $("<p>");

	// construct the string of text we see in chat history
	var new_string = username + ": " + text;

	// if there is information on the special tag ...
	if ( special ) {

		// check whether that special is MY special
		// NOTE: you can use this same logic to filter messages NOT sent by your program; refer to in-class example
		if ( special.id == "my_chat_special" ) {

			// so we can see what's up
			console.log( special )
			
			// get the information from the special object
			chat_img = special.img

			// check if img URL was sent
			if ( chat_img ) {
				// create a new <img> element
				var chat_img_el = $('<img>');
				// set the img src using the URL from the user: <img src="[chat_img]" />
				chat_img_el.attr( 'src', chat_img );
			}
		}
	}

	// place the text inside the element we just created
	$(el).text( new_string );
	// append image to <p>
	$(el).append( chat_img_el );
	
	// append the newly created element to #chat-history div
	$("#chat-history").append( el );

}


// wait until all elements on the page have loaded,
// then run the code inside document.ready
$(document).ready(function() {

	// look for .chat-button, listen for clicks
	$("#chat-input-wrapper .chat-button").click(function(){

		// username
		var input_username = $("#chat-input-wrapper .chat-username").val();
		// chat message
		var input_text = $("#chat-input-wrapper .chat-input").val();
		// img
		var input_img = $("#chat-input-wrapper .chat-img").val();
		
		// build special values
		var special = {
			"id" : "my_chat_special", // unique ID to indicate YOUR special object
			"img" : input_img
		}

		// call the sendChat function
		// pass our username, message, and special parameter (if any)
		ClassChat.sendChat( input_username, input_text, special );

		// clear the input fields
		$("#chat-input-wrapper .chat-input").val("");
		$("#chat-input-wrapper .chat-img").val("");

	});

	// needed to start chat
	ClassChat.start();

});








