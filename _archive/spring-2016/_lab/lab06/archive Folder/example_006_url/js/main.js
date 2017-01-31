var urls = [
	"#h",
	"#he",
	"#hel",
	"#hell",
	"#hello",
	"#hell",
	"#hel",
	"#he",
	"#h",
];

function changeURL() {
	clearTimeout( t );
	
	// this actually changes the url
	window.location.replace( urls[url_index] );
	
	url_index++;
	if( url_index > urls.length - 1 ) {
		url_index = 0;
	}
	
	t = setTimeout(changeURL, 50 );
}

var t;
var url_index = 0;
$(document).ready(function() {
	changeURL();
});



