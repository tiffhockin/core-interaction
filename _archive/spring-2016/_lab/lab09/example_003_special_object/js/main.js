// format incoming messages and add them to #chat-history
function newChat( username, text, special ) {

	var chat_color = "";
	var chat_date = "";
	var chat_width = "";
	var chat_height = "";
	var chat_length = "";

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
			chat_color = special.color;
			chat_date = special.date;
			chat_width = special.width;
			chat_height = special.height;
			chat_length = special.message_length;

			// use that information!
			el.css({ 
				'background-color' : chat_color,
				'width' : chat_width+"px",
				'height' : chat_height+"px"
			});

		}
	}

	// place the text inside the element we just created
	$(el).text( new_string );
	
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
		// color
		var input_color = $("#chat-input-wrapper .chat-color").val();
		
		// build special values
		var special = {
			"id" : "my_chat_special", // unique ID to indicate YOUR special object
			"color" : input_color,
			"date" : new Date(), // current date and time
			"width" : getRandomInt(100,500), // random # between 100–500
			"height" : getRandomInt(100,500), // random # between 100–500
			"message_length" : input_text.length, // how many characters are in the message?
		}

		// call the sendChat function
		// pass our username, message, and special parameter (if any)
		ClassChat.sendChat( input_username, input_text, special );

		// clear the input field
		$("#chat-input-wrapper .chat-input").val("");
		$("#chat-input-wrapper .chat-color").val("");

	});

	// needed to start chat
	ClassChat.start();

});








