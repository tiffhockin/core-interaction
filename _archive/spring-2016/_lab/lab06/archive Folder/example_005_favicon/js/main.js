function setNextFavicon() {
	clearTimeout( t );

	// i just googled
	// how to change the favicon
	// *shrug*
	document.head || (document.head = document.getElementsByTagName('head')[0]);
	var link = document.createElement('link');
	var oldLink = document.getElementById('dynamic-favicon');
	link.id = 'dynamic-favicon';
	link.rel = 'shortcut icon';
	// this is where we need to change something
	link.href = icons[icon_index];
	if (oldLink) {
		document.head.removeChild(oldLink);
	}
	document.head.appendChild(link);

	icon_index++;
	if( icon_index > icons.length - 1 ) {
		icon_index = 0;
	}

	t = setTimeout(function(){
		setNextFavicon();
	}, 200);
}

// https://s-media-cache-ak0.pinimg.com/originals/b0/1b/71/b01b712c2aaf32b5b61a3f011fa2e54f.gif
var t;
var icons = [
	"./img/icon_001.ico",
	"./img/icon_002.ico",
	"./img/icon_003.ico",
	"./img/icon_004.ico",
	"./img/icon_005.ico",
	"./img/icon_006.ico",
	"./img/icon_007.ico",
	"./img/icon_008.ico"
];
var icon_index = 0;
$(document).ready(function() {
	setNextFavicon();
});