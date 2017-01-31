var name = "chris";
var age = 32;

$(document).ready(function() {

	/* if statement */
	if( name == "chris" ) {
		/* do this if name is equal to chris */
		console.log( "correct! you are chris!" );
	}
	
	if( age == 32 ) {
		console.log( "correct! you are 32... sorry." );
	}

	/*
		== true
		!= not true
		> greather than
		< less than
		>= greater than or equal to
		<= less than or equal to
	*/
	if( age != 33 ) {
		console.log( "correct! you are NOT 33." );
	}

	if( age > 31 ) {
		console.log( "correct! you are MORE than 31." );
	}

	/* compound if statement */
	/* both must be true */
	if( name == "chris" && age == 32 ) {
		console.log( "correct! you are chris _and_ 32");
	}

	/* one must be false */
	if( name == "chris" || age == 31 ) {
		console.log( "correct! you are either chris _or_ 32");
	}
});