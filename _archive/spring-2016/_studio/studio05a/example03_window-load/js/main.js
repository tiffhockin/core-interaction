$(document).ready(function() {
	
	/* 

	GOALS

	- demo the difference between document.ready and window.load

	*/

	var status = $('#status');

	status.text('document ready');
	console.log('document ready');

	// wait for all items in the document to load
	$(window).load(function(){
		
		status.text('window load');
		console.log('window load');

	});

}); 