// format incoming messages and add them to #chat-history
function newChat( username, text, special ) {

	// select HTML element you want to wrap your message in
	// alternatives might be: <span>, <div>
	var el = $("<p>");

	// construct the string of text we see in chat history
	var new_string = username + ": " + text;
	
	// place the text inside the element we just created
	$(el).text( new_string );

	// ---> EXAMPLE FUNCTION O1
	// call a function for each new chat added to the #chat-history div
	var withThis = "text to do something with";
	doSomething( withThis );

	// ---> EXAMPLE FUNCTION O2
	// call another function for each new chat added to the #chat-history div
	searchText( "you", text );

	// append the newly created element to #chat-history div
	$("#chat-history").append( el );

}

// ---> EXAMPLE FUNCTION O1
// a function that does something
function doSomething( withThis ) {
	// do something
	console.log('do something: ' + withThis );
}

// ---> EXAMPLE FUNCTION O2
// ouline for a function that searchs text
function searchText( termToLookFor, textToSearch ) {

	// look for X character in every message
	// if X exists
	if ( textToSearch.indexOf(termToLookFor) !== -1 ) {
		// do something, i.e., play a sound
		console.log( "yes! we found { " + termToLookFor + " } in >> " + textToSearch );
	}
	// otherwise
	else {
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
		// pass our username, message, and special parameter (if any)
		ClassChat.sendChat( input_username, input_text, "" );

		// clear the input field
		$("#chat-input-wrapper .chat-input").val("");

	});

	// needed to start chat
	ClassChat.start();

});