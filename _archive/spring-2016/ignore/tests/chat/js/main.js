var timer;
var chatIndex = 0;
var received = false;
function newChat( username, text, special ) {

	clearTimeout(timer);

	$("#indicator").addClass("receiving");

	if ( special.id && special.id !== undefined ) {
		if ( special.id == "xy_chat" ) {
			
			if ( special.user != $.cookie('user') ) {
				received = true;
			}

			$("#chat-history-container").css({
				"height" : 100/special.ratio+"vw",
				"max-width" : special.ratio*100+"vh"
			})

			// doesn't always seem to be working as i'd expect it to?
			timer = setTimeout( function(){
				drawMessage(special.posX, special.posY, special.ratio, received )
			}, 1000 );

		}
	}

}


var draw, framerate = 18;
function drawMessage( posX, posY, ratio, received ) {

	var i = 0;
	var type = "sent";

	draw = setInterval( function(){ updatePos(i) }, framerate );

	function updatePos(index) {

		if ( index < posX.length-1 ) {

			var dot = $('<div />');
			
			if ( received ) { type = "received"; }

			dot.addClass('dot ' + type).css({
				"left" : posX[index]+"%",
				"top" : posY[index]+"%"
			})

			$("#chat-history").append(dot);

			i++

		} else { 

			clearInterval(draw);
			$("#indicator").removeClass("receiving");
			i = 0;
			eraseMessage();

		}

	}

}

var posX = [18.71,18.71,18.71,18.71,18.71,18.71,18.71,18.71,19.26,19.67,19.94,20.36,20.63,21.05,21.46,21.73,22.28,22.83,23.25,23.66,23.93,24.21,24.35,24.62,24.9,24.9,25.03,25.03,25.17,25.17,25.31,25.45,25.45,25.72,25.72,25.72,25.72,25.72,25.72,25.72,25.72,25.72,25.72,25.72,25.72,25.72,25.72,25.72,26,26.27,26.69,27.1,27.51,27.92,28.34,28.75,29.16,29.57,29.85,30.26,30.81,31.22,31.64,32.19,32.74,33.29,33.7,34.25,34.8,35.9,36.73,37.96,39.48,40.72,41.82,42.37,42.78,42.92,42.92,42.92,42.5,42.23,41.82,41.13,40.72,40.17,39.61,38.79,38.51,37.83,37.41,37,36.73,36.59,36.59,36.73,37.41,38.24,39.06,40.17,41.54,42.92,44.29,45.8,47.46,48.69,49.79,50.76,51.58,52.27,52.68,52.82,52.96,52.96,52.96,52.68,52.27,51.99,51.72,51.44,51.17,50.89,50.62,50.21,49.93,49.52,49.11,48.69,48.28,47.87,47.73,47.73,47.73,47.73,47.73,48.01,48.42,48.97,49.52,50.34,51.03,51.72,52.54,53.23,54.2,55.16,55.98,56.67,57.36,58.05,58.73,59.7,60.25,60.94,61.9,62.45,62.86,63,63,63,63,62.72,62.31,62.04,61.35,61.07,60.66,60.39,59.83,59.28,58.32,57.5,56.53,55.85,55.43,55.43,55.43,55.43,55.85,56.4,57.22,57.91,58.87,59.7,60.52,61.62,62.72,63.96,65.06,65.89,66.71,67.4,67.68,67.68,67.68,67.68,67.68,67.68,67.95,68.23,68.64,68.91,69.05,69.19,69.33,69.19,68.78,68.23,67.54,66.85,66.3,65.89,65.61,65.61,65.61,66.44,67.26,68.5,69.46,70.56,71.66,72.21,73.04,73.73,74.28,74.83,75.38,75.38,75.38,75.24,74.69,74,73.59,73.04,72.49,71.94,71.53,70.98,70.43,69.88,69.33,68.78,68.23,67.81,67.68,67.68,67.68,67.68,68.09,68.78,69.6,70.7,71.8,72.76,73.73,74.42,74.97,75.52,76.07,76.34,77.17,77.44,78.27,78.82,79.37,79.78,80.06,80.19,80.47,80.47]

var posY = [50.24,49.06,47.17,44.58,42.22,39.39,36.79,34.43,32.78,31.13,30.42,29.72,29.25,29.01,29.01,29.01,29.48,30.66,32.08,33.73,36.32,38.44,40.8,43.87,46.7,49.29,51.42,54.48,56.6,58.96,60.85,63.21,65.09,66.27,67.22,67.69,67.92,68.16,67.92,67.45,66.75,65.09,63.44,61.32,58.96,56.6,55.19,53.54,52.36,50.94,50.47,49.76,49.53,49.29,49.29,49.29,50,51.18,52.83,54.48,56.37,58.02,60.14,62.03,63.68,64.86,65.33,66.04,66.27,66.27,66.27,65.8,63.92,61.32,58.49,56.37,54.25,52.12,49.53,47.64,46.23,45.52,44.58,43.87,43.4,43.4,43.4,43.4,43.4,43.63,45.05,45.99,47.64,49.06,50.71,52.36,54.48,56.6,58.96,61.32,62.97,64.39,65.09,65.57,65.8,65.8,65.57,63.44,60.38,56.6,52.59,48.11,43.87,39.86,35.85,32.08,28.77,26.89,25,23.58,22.88,22.41,21.93,21.7,21.7,21.7,21.7,22.17,23.82,25.47,28.3,31.37,34.67,38.68,43.16,46.93,50.47,54.01,57.31,60.14,62.74,64.62,65.33,66.27,67.22,67.92,68.16,68.4,68.63,68.63,68.63,68.63,67.92,66.04,63.21,58.73,54.72,50.47,46.23,42.45,38.92,35.38,33.25,31.84,30.42,29.48,28.77,28.54,28.3,28.3,29.01,30.42,32.55,34.91,37.97,41.27,44.81,47.88,50.94,54.48,58.02,61.08,63.68,65.8,67.45,69.1,70.05,70.75,70.75,70.75,69.1,67.69,64.86,61.79,57.31,54.25,51.18,47.88,46.23,45.28,43.63,43.16,41.98,41.75,41.75,41.75,42.22,42.92,44.1,45.52,47.41,49.06,51.18,54.48,57.78,60.38,61.79,62.74,63.44,63.68,63.68,63.68,62.74,60.85,58.96,57.31,54.72,52.83,50.71,47.41,44.34,41.75,40.09,38.68,37.74,37.26,37.03,37.03,37.03,37.03,37.26,38.21,39.62,41.27,42.69,43.87,45.28,45.99,47.17,47.88,48.11,48.11,47.88,46.93,45.75,43.87,42.69,41.51,40.09,39.62,38.44,38.21,37.5,37.03,36.79,36.79,36.79,36.56,36.56,36.32]

var ratio = 1.7146226415094339;

// for testing, or for arrival on page
// drawMessage( posX, posY, ratio, false )


var eraseTimer;
function eraseMessage() {

	var i = 0;
	eraseTimer = setInterval( function(){ erase(i,$('.dot')) } , framerate );

	function erase(index,dots) {

		if ( index < dots.length ) {

			var thisDot = dots.eq(index);
			if ( !thisDot.hasClass("down") ) {
				thisDot.addClass("down").animate({
					"top" : "150vh"
				}, 3500, "linear" );
			}

			i++

		} else { 
			clearInterval(eraseTimer);
			cleanUp();
			i = 0;
		}

	}

}


function cleanUp() {
	setTimeout(function(){ 
		$('.dot.down').each(function(){
			if ( $(this).attr("style").indexOf("150vh") != -1 ) {
				$(this).remove();
			}
		});
	}, 3000 );
}


var colors = [ "rgb(40, 80, 255)", "rgb(250, 205, 105)", "rgb(235, 178, 178)", "rgb(200, 210, 200)" ]

// made up users for text-based chats
var names = [ "Jon", "Sally", "Bob", "Ralph", "Lucy", "Ronnie \"The Rager\"", "Cindy", "Mary", "Marve", "Todd", "Dolly", "Darla", "Sarah" ]

// made up messages for text-based chats
var messages = [ "( ͡° ͜ʖ ͡°)", "(▀̿Ĺ̯▀̿ ̿)", "ʕ•ᴥ•ʔ", "(ง ͠° ͟ل͜ ͡°)ง", "༼ つ ◕_◕ ༽つ", "ಠ_ಠ", "(づ｡◕‿‿◕｡)づ", "[̲̅$̲̅(̲̅5̲̅)̲̅$̲̅]", "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ✧ﾟ･: *ヽ(◕ヮ◕ヽ)", "(• ε •)", "(ง'̀-'́)ง", "-___-", "(╯°□°)╯︵ #*%@", "✓ ✓ ✓", "(ಥ﹏ಥ)", "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", "(☞ﾟ∀ﾟ)☞", "(◕‿◕✿)", "(ᵔᴥᵔ)", "ლ(ಠ益ಠლ)", "(づ￣ ³￣)づ", "♥‿♥", "♥", "☮ ☮ ☮", "☂ O_O", "◉_◉", "(~˘▾˘)~", "(._.) ( l: ) ( .-. ) ( :l ) (._.)", "( ⚆ _ ⚆ )", "(▰˘◡˘▰)", "☼.☼", "yolo", "lol", "LOL", "HAHAHAHAHAHA", ":-)", ":)", "#lifegoals", "cuuuuuute", "!!!", "^ haha" ]

function packageChat() {

	var canvasW = $(window).width()
		, canvasH = $(window).height()
		, ratio = canvasW / canvasH
		, chat_username = names[getRandomInt(0,names.length-1)]
		, chat_text = messages[getRandomInt(0,messages.length-1)]
		;

	if ( !hassetname ) {
		if ( global_user == -123 ) {
			global_user = chat_username+getRandomInt(1000,5000);
			$.cookie( 'bHasSetName', true );
			$.cookie( 'user', global_user );
		}
	}


	// translate X to % to maintain aspect ratio
	var ratioX = 100 / canvasW;
	var ratioY = 100 / canvasH;
	
	var newPosX = [];
	var newPosY = [];

	for ( var i = 0; i < posX.length; i++ ) {

		// ideally this would be *100 (2 decimal pts)
		// most x,y positions are too long to send to server
		newPosX.push( Math.round((posX[i]*ratioX)*10)/10 );
		newPosY.push( Math.round((posY[i]*ratioY)*10)/10 );

	}

	// console.log( "posX", JSON.stringify(newPosX) );
	// console.log( "posY", JSON.stringify(newPosY) );

	var special = {
		id : "xy_chat",
		user : global_user,
		posX : newPosX,
		posY : newPosY,
		ratio : ratio
	}

	// closed loop, for testing
	// newChat( chat_username, chat_text, special );

	ClassChat.sendChat( chat_username, chat_text, special );

}


var recording = false
	, mousedown = false
	, global_user = -123
	, hassetname = $.cookie('bHasSetName')
	;

$(document).ready(function() {

	$('body').css( 'background', colors[getRandomInt(0,colors.length)] );
	
	if ( hassetname ) { global_user = $.cookie('user'); }

	// safety net
	$(window).mouseup( function(e) { 
		mousedown = false; 
	});

	// mousedown to begin & recording
	$(window).mousedown( function(e) {

		if ( !mousedown ) {

			mousedown = true;

			if ( !recording ) {

				// begin recording
				recording = true;
				// reset previous x,y positions
				posX = [];
				posY = [];

				$("body").addClass('recording');
				$("#drawer").css({
					"left" : (e.clientX-7)+"px",
					"top" : (e.clientY-7)+"px"
				})

			} else {
				// stop recording
				recording = false;
				$("body").removeClass('recording').addClass('drawn');
				// package & send chat
				packageChat();

			}
		}

	});


	$(window).mousemove(function(e) {

		if ( recording ) {

			var x = e.clientX;
			var y = e.clientY;

			$("#drawer").css({
				"left" : (x-7)+"px",
				"top" : (y-7)+"px"
			})
 
			posX.push( x );
			posY.push( y );

		}

	});

	ClassChat.start();

});

