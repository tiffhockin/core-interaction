$(document).ready(function() {
	for( var i = 0; i < 100; i++ ) {
		console.log( "index: " + i );
	}

	// this is neither js
	// nor jq, it's a function we defined
	setNextTitle();
});

var t;
// var titles = ["one", "two", "three", "four", "five"];
var titles = [
	"hello world",
	"ello worldh",
	"llo worldhe",
	"lo worldhel",
	"o worldhell",
	" worldhello",
	"worldhello ",
	"orldhello w",
	"rldhello wo",
	"ldhello wor",
	"dhello worl"
];
var title_index = 0;


function setNextTitle() {
	// kills all timeouts waiting
	// to fire
	// start fresh
	clearTimeout( t );

	// this actually changes the title of the page
	document.title = titles[title_index];

	// if it was 0
	// now it's one
	title_index++;
	if( title_index > titles.length - 1 ) {
		title_index = 0;
	}

	t = setTimeout(function(){
		setNextTitle();
	}, 250);
}