//var stuff = [ "one", 3, "ten", 7];

var states = [
	"h",
	"he",
	"hel",
	"hell",
	"hello",
	"hell",
	"hel",
	"he",
	"h",
];

// var states = [
// 	"#_Q(o_o)__________;_________oQ(o_o)",
// 	"#_Q(o_o)__________;________o_Q(o_o)",
// 	"#_Q(o_o)__________;_______o__(o_o)Q",
// 	"#_Q(o_o)__________;______o___(o_o)Q",
// 	"#_Q(o_o)__________;_____o____(o_o)Q",
// 	"#_Q(o_o)__________;____o_____(o_o)Q",
// 	"#_Q(o_o)__________;___o______(o_o)Q",
// 	"#_Q(o_o)__________;__o_______(o_o)Q",
// 	"#_Q(o_o)__________;_o________(o_o)Q",
// 	"#_Q(o_o)__________;o_________(o_o)Q",
// 	"#_Q(o_o)_________o;__________(o_o)Q",
// 	"#_Q(o_o)________o_;__________(o_o)Q",
// 	"#_Q(o_o)_______o__;__________(o_o)Q",
// 	"#_Q(o_o)______o___;__________(o_o)Q",
// 	"#_Q(o_o)_____o____;__________(o_o)Q",
// 	"#_Q(o_o)____o_____;__________(o_o)Q",
// 	"#_Q(o_o)___o______;__________(o_o)Q",
// 	"#_Q(o_o)__o_______;__________(o_o)Q",
// 	"#_Q(o_o)_o________;__________(o_o)Q",
// 	"#_(o_o)Qo_________;__________(o_o)Q",
// 	"#_(o_o)Q_o________;__________(o_o)Q",
// 	"#_Q(o_o)__o_______;__________(o_o)Q",
// 	"#_Q(o_o)___o______;__________(o_o)Q",
// 	"#_Q(o_o)____o_____;__________(o_o)Q",
// 	"#_Q(o_o)_____o____;__________(o_o)Q",
// 	"#_Q(o_o)______o___;__________(o_o)Q",
// 	"#_Q(o_o)_______o__;__________(o_o)Q",
// 	"#_Q(o_o)________o_;__________(o_o)Q",
// 	"#_Q(o_o)_________o;__________(o_o)Q",
// 	"#_Q(o_o)__________;o_________(o_o)Q",
// 	"#_Q(o_o)__________;_o________(o_o)Q",
// 	"#_Q(o_o)__________;__o_______(o_o)Q",
// 	"#_Q(o_o)__________;___o______(o_o)Q",
// 	"#_Q(o_o)__________;____o_____(o_o)Q",
// 	"#_Q(o_o)__________;_____o____(o_o)Q",
// 	"#_Q(o_o)__________;______o___(o_o)Q",
// 	"#_Q(o_o)__________;_______o__(o_o)Q",
// 	"#_Q(o_o)__________;________o_(o_o)Q"
// ];

function jumpState() {
	clearTimeout( t );
	window.history.pushState( {},"", states[poop] );
	poop++;
	if( poop > states.length ) {
		poop = 0;
	}
	t = setTimeout( jumpState, 50 );
}

var t;
var poop = 0;
$(document).ready(function() {
	jumpState();
});



