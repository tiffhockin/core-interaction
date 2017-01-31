function checkBoard() {
	clearTimeout( t );
	
	var result = checkHits( box_x, box_y, box_w, box_h, food_x, food_y, food_w, food_h);
	console.log( result );
	if( result == true ) {
		$("#food").remove();
	}

	t = setTimeout(checkBoard, 100);
}

function checkHits( x1, y1, w1, h1, x2, y2, w2, h2) {
	if (x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && h1 + y1 > y2) {
    	return true;
	}

	return false;

	/*
		check hits between circles
	*/
	// var circle1 = {radius: 20, x: 5, y: 5};
	// var circle2 = {radius: 12, x: 10, y: 5};

	// var dx = circle1.x - circle2.x;
	// var dy = circle1.y - circle2.y;
	// var distance = Math.sqrt(dx * dx + dy * dy);

	// if (distance < circle1.radius + circle2.radius) {
	//     // collision detected!
	// }
}

function drawFood() {
	$("#food").css({
		width: food_w,
		height: food_h,
		left: food_x,
		top: food_y
	});
}

function drawBox() {
	$("#box").css({
		width: box_w,
		height: box_h,
		left: box_x,
		top: box_y
	});
}

var food_x = 200;
var food_y = 200;

var food_w = 20;
var food_h = 20;

var box_x = 100;
var box_y = 100;

var box_w = 100;
var box_h = 100;

var box_x_speed = 10;
var box_y_speed = 10;

var t;
$(document).ready(function() {
	drawBox();
	drawFood();

	$("#wrapper").click(function(){
		$("#clicktostart").hide();

		t = setTimeout(checkBoard, 250);
	});

	$("#wrapper").keydown(function(event){
		//console.log( event.keyCode );
		
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