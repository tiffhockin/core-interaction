function drawBox() {
	$("#box").css({
		width: box_w,
		height: box_h,
		left: box_x,
		top: box_y
	});
}

function drawWorld() {
	$("#world").css({
		width: world_w,
		height: world_h,
		left: world_x,
		top: world_y
	});
}

var box_x = 100;
var box_y = 100;
var box_w = 100;
var box_h = 100;
var box_x_speed = 10;
var box_y_speed = 10;

var world_x = -10;
var world_y = -10;
var world_w = 500;
var world_h = 500;
var world_x_speed = 10;
var world_y_speed = 10;
$(document).ready(function() {
	drawBox();
	drawWorld();

	$("#wrapper").click(function(){
		$("#clicktostart").hide();
	});

	$("#wrapper").keydown(function(event){
		console.log( event.keyCode );
		
		if (event.keyCode == 37) { 
			box_x = box_x - box_x_speed;
			world_x = world_x + world_x_speed;
			drawBox();
			drawWorld();

			return false;
		} else if(event.keyCode == 38) {
			box_y = box_y - box_y_speed;
			world_y = world_y + world_y_speed;
			drawBox();
			drawWorld();

			return false;
		} else if(event.keyCode == 39) {
			box_x = box_x + box_x_speed;
			world_x = world_x - world_x_speed;
			drawBox();
			drawWorld();

			return false;
		} else if(event.keyCode == 40) {
			box_y = box_y + box_y_speed;
			world_y = world_y - world_y_speed;
			drawBox();
			drawWorld();

			return false;
		}
	});
});