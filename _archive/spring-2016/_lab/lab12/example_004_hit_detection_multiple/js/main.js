function checkBoard() {
	clearTimeout( t );
	
	var alive = 0;
	
	for( var i = 0; i < Object.keys(food).length; i++ ) {
		if( food[i].alive == true ) {
			alive++;
			var result = checkHits( box_x, box_y, box_w, box_h, food[i].x, food[i].y, food[i].w, food[i].h);
			if( result == true ) {
				food[i].alive = false;
				$(".food:eq("+i+")").css({
					"border": "1px solid red"
				});
			}
		}
	}

	if( alive > 0 ) {
		t = setTimeout(checkBoard, 100);
	} else {
		console.log("game over.");
	}
}

function checkHits( x1, y1, w1, h1, x2, y2, w2, h2) {
	if (x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && h1 + y1 > y2) {
    	return true;
	}

	return false;
}

function drawFood() {
	for( var i = 0; i < Object.keys(food).length; i++ ) {
		$(".food:eq("+i+")").css({
			width: food[i].w,
			height: food[i].h,
			left: food[i].x,
			top: food[i].y			
		});
	}
}

function drawBox() {
	$("#box").css({
		width: box_w,
		height: box_h,
		left: box_x,
		top: box_y
	});
}

var food = [
	{
		x: 200,
		y: 200,
		h: 20,
		w: 20,
		alive: true
	}, {
		x: 300,
		y: 300,
		h: 30,
		w: 20,
		alive: true
	}
];

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