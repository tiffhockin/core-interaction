$(document).ready(function(){

	var _fileList = $('.file-list')
		, _windowLoc = window.location
		, _webLocFiles = _fileList.find( $('a[href*=".webloc"], a[href*=".txt"]') )
		, _currentImg = false
		, _imgs = $('a[href*=".png"], a[href*=".gif"], a[href*=".jpg"], a[href*=".JPG"], img' )
		, _imgList = []
		;

	setContext();

	$(window).load(function(){
		$('body').animate({ 'opacity' : '1' }, 500 );
	});

	// update page header based on directory 
	function setContext() {

		// current directory
		var directory = _windowLoc.pathname.substring(0, _windowLoc.pathname.lastIndexOf('/') )
			// full URL
			, windowHref = _windowLoc.href
			;

		// update breadcrumb
		if ( directory !== '' ) {
			$('#directory').text(directory);
		}

		// target link by text content 
		$('a:contains("Parent Directory")').addClass('back');

	}

});






