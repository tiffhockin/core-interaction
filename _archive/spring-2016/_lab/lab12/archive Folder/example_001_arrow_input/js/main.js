$(document).ready(function() {
	$("#wrapper").click(function(){
		$("#clicktostart").hide();
	});

	$("#wrapper").keydown(function(event){
		console.log( event.keyCode );
		
		if (event.keyCode == 37) { 
			$("#arrows-global span").text("left");

			return false;
		} else if(event.keyCode == 38) {
			$("#arrows-global span").text("up");

			return false;
		} else if(event.keyCode == 39) {
			$("#arrows-global span").text("right");

			return false;
		} else if(event.keyCode == 40) {
			$("#arrows-global span").text("down");

			return false;
		}
	});

	$("#box").keydown(function(event){
		console.log( event.keyCode );
		
		if (event.keyCode == 37) { 
			$("#arrows-box span").text("left");

			return false;
		} else if(event.keyCode == 38) {
			$("#arrows-box span").text("up");

			return false;
		} else if(event.keyCode == 39) {
			$("#arrows-box span").text("right");

			return false;
		} else if(event.keyCode == 40) {
			$("#arrows-box span").text("down");

			return false;
		}
	});
});