function drawWorld() {
	$("#world").css({
		width: world_w,
		height: world_h,
		left: world_x,
		top: world_y
	});
}

var world_x = -10;
var world_y = -10;

var world_w = 500;
var world_h = 500;

var world_x_speed = 10;
var world_y_speed = 10;
$(document).ready(function() {
	drawWorld();

	$("#wrapper").click(function(){
		$("#clicktostart").hide();
	});

	$("#wrapper").keydown(function(event){
		console.log( event.keyCode );
		
		if (event.keyCode == 37) { 
			world_x = world_x - world_x_speed;
			drawWorld();

			return false;
		} else if(event.keyCode == 38) {
			world_y = world_y - world_y_speed;
			drawWorld();

			return false;
		} else if(event.keyCode == 39) {
			world_x = world_x + world_x_speed;
			drawWorld();

			return false;
		} else if(event.keyCode == 40) {
			world_y = world_y + world_y_speed;
			drawWorld();

			return false;
		}
	});
});