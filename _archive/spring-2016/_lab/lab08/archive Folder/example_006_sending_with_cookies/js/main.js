var username = -123;
$(document).ready(function() {

	var hassetname = $.cookie('bHasSetName');

	if( hassetname ) {
		username = $.cookie('username');
		$("#chat-input-wrapper .chat-username").hide();
	}

	console.log( username );
	
	$("#chat-input-wrapper .chat-button").click(function() {
		
		var input_username = $("#chat-input-wrapper .chat-username").val();
		var input_text = $("#chat-input-wrapper .chat-input").val();

		if( input_username != "" || username != -123 ) {
			if( username == -123 ) {
				$.cookie('bHasSetName', true);
				$.cookie('username', input_username);
				username = $.cookie('username');
				$("#chat-input-wrapper .chat-username").hide();
			}

			ClassChat.sendChat( username, input_text, "" );
		}
	});
});