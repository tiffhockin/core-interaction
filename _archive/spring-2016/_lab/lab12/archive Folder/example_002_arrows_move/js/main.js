function drawBox() {
	$("#box").css({
		width: box_w,
		height: box_h,
		left: box_x,
		top: box_y
	});
}

var box_x = 100;
var box_y = 100;

var box_w = 100;
var box_h = 100;

var box_x_speed = 10;
var box_y_speed = 10;
$(document).ready(function() {
	drawBox();

	$("#wrapper").click(function(){
		$("#clicktostart").hide();
	});

	$("#wrapper").keydown(function(event){
		console.log( event.keyCode );
		
		if (event.keyCode == 37) { 
			box_x = box_x - box_x_speed;
			drawBox();

			return false;
		} else if(event.keyCode == 38) {
			box_y = box_y - box_y_speed;
			drawBox();

			return false;
		} else if(event.keyCode == 39) {
			box_x = box_x + box_x_speed;
			drawBox();

			return false;
		} else if(event.keyCode == 40) {
			box_y = box_y + box_y_speed;
			drawBox();

			return false;
		}
	});
});