/*

GOALS
Save username by setting a cookie. 
Use this cookie to detect sent vs. received messages

TO DO

1. define default value for global_username

1A. user has not yet filled in their name
hassetname --> false
	2. wait for someone to enter a username, then run steps 3–6

1B. if user has filled in their name
hassetname --> true
	3. someone uses chat, enters a username
	4. set a cookie to remember username
	5. update global_username with chat username (which is stored in the cookie)
	6. distinguish between sent and received messages

*/ 


// format incoming messages and add them to #chat-history
function newChat( username, text, special ) {

	// alternatives might be: <span>, <div>
	var el = $("<p>");

	// if text is from home user ...
	if ( username == $.cookie('username') ) {
		// add class to indicate so
		el.addClass('sent-message');
	} else {
		// do something else
	}

	// construct the string of text we see in chat history
	var new_string = username + " - – — " + text;
	// place the text inside the element we just created
	$(el).text( new_string );
	// append the newly created element to #chat-history div
	$("#chat-history").append( el );

}

// el is not a global var
// console.log( el )

// 1. define default value for global_username
var global_username = -123;

// wait until all elements on the page have loaded
$(document).ready(function() {

	// create a cookie and store in a variable
	var hassetname = $.cookie('bHasSetName');
	
	// if hassetname is true (see below)
	if ( hassetname ) {
		// update global_username variable
		global_username = $.cookie('username');
		// hide username input
		$("#chat-input-wrapper .chat-username").hide();
	}

	// see what's what
	console.log( 'global_username', global_username );

	// look for .chat-button, listen for clicks
	$("#chat-input-wrapper .chat-button").click(function(){

		// get user name from .chat-username
		var input_username = $("#chat-input-wrapper .chat-username").val();
		// get message from .chat-input
		var input_text = $("#chat-input-wrapper .chat-input").val();


		// has a username cookie been set???

		// if YES ...
		if ( hassetname ) {
			// set input_username to global_username
			input_username = global_username;

		// if NO ...
		} else {

			// check whether user has input a name
			if ( input_username != "" || global_username != -123 ) {
				// if username is still default ...
				if ( global_username == -123 ) {
					console.log('still default')
					// update bHasSetName to "true"
					$.cookie( 'bHasSetName', true );
					// create a new cookie to store username
					$.cookie( 'username', input_username );
					// update global variable
					global_username = input_username;
					// hide username input field
					$("#chat-input-wrapper .chat-username").hide();
				}

			} else {
				// input is blank
				// maybe you prompt the user to enter a username	
				console.log( 'no username' );
			}
		}

		// send chat. pass: ( username, message, special )
		ClassChat.sendChat( input_username, input_text, "" );

		// clear the input field
		$("#chat-input-wrapper .chat-input").val("");

	});

	// needed to start chat
	ClassChat.start();

});








