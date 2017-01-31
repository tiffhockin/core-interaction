/* define a function */
function testChris() {
	/* both must be true */
	if( name == "chris" && age == 32 ) {
		console.log( "correct! you are either chris _or_ 32");
	}
}

/* return a value */
function testChrisReturn() {
	if( name == "chris" && age == 32 ) {
		return true;
	} else {
		return false;
	}
}

/* take a value, return a value */
/* you don't have to return */
function testAnyone( name, age ) {
	if( name == "chris" && age == 32 ) {
		return "chris";
	} else if( name == "tiff" && age == 31 ) {
		return "tiff";
	}
}

var name = "chris";
var age = 32;
$(document).ready(function() {
	/* call a function */
	testChris();
	
	/* call a function with a return value */
	var answer = testChrisReturn();
	console.log( "answer: " + answer );

	/*
		call a function
		pass values
		get return value
	*/
	var person = testAnyone( "chris", 32 );
	console.log( "that's: " + person );

	person = testAnyone( "tiff", 31 );
	console.log( "that's: " + person );
});