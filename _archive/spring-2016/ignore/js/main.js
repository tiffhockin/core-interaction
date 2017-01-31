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

		weblocToLink();

		if ( _imgs.length != 0 ) { imgToGallery(); }

		$('body').animate({ 'opacity' : '1' }, 500 );

		$('#top a').click(function(e){
			e.preventDefault();
			$("html, body").stop().animate( {scrollTop:0}, '500', 'swing');
		});

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

		// make sure we're not inside the students folder
		if ( !windowHref.indexOf('students') > -1 ) {

			// lab
			if ( windowHref.indexOf('lab') > -1 ) {
				$('body').addClass('lab');
				$('#qualifier').text('(Lab)');
			}

			// studio
			if ( windowHref.indexOf('studio') > -1 ) {
				$('body').addClass('studio');
				$('#qualifier').text('(Studio)');
			}

		} 

		// students
		if ( windowHref.indexOf('students') > -1 ) {
			$('body').addClass('students');
			$('#qualifier').text('');
		}

	}

	// scrape images on page; enable lightbox viewing
	function imgToGallery() {

		$('main').append('<div id="lightbox-container"><div id="close" class="monospace">Close</div><nav id="img-prev"></nav><nav id="img-next"></nav><div id="lightbox"></div><div id="caption"></div></div>');

		var lightBox = $('#lightbox')
		, lightBoxContainer = $('#lightbox-container')
		, captionContainer = $('#caption')
		;

		_imgs.each(function(i){

			// build img array
			_imgList.push({
				'source' : getSource( $(this) ),
				'index' : i
			})
			
			$(this)
			.attr('data-index', i )
			.click( function(e){
				
				e.preventDefault();

				_currentImg = parseInt( $(this).attr('data-index') );

				placeImg(_currentImg,false);

				$('body').addClass('lightbox');

			});

		});


		// hide nav if only 1 image
		if ( _imgs.length <= 1 ) { $('nav').hide() }

		$('#img-next').click(function(){ placeImg(_currentImg,1); });
		$('#img-prev').click(function(){ placeImg(_currentImg,-1); });
		$('#close').click(function(){ $('body').removeClass('lightbox'); });

		// source and place image in lightbox
		function placeImg(index,direction) {

			if ( direction ) {
				// at the end; loop to beginning
				if ( index == _imgs.length -1 && direction > 0 ) { 
					index = 0; } 
				// at the beginning; loop to end
				else if ( index <= 0 && direction < 0 ) { 
					index = _imgs.length -1; }
				// business as usual
				else {
					index = index + direction; }
			}

			lightBox.html( '<img id="lightbox-image" data-index="'+_imgList[index].index+'" src="'+_imgList[index].source+'"/>' );

			captionContainer.html( index+1 + ' / ' + _imgs.length );

			_currentImg = index;

		}

		// get img src from `img` or `a`
		function getSource(obj) {
			
			var source = false;
			// different options for `img` vs `a`
			if ( obj.is('img') ) {
				source = obj.attr('src');
			}
			if ( obj.is('a') ) {
				source = obj.attr('href');
			}
			return source;

		}

	}


	// convert webref files to links
	function weblocToLink() {
		_webLocFiles.each(function(i){

			var thisFile = $(this);

			$.get( thisFile.attr('href'), function(data) {
				
				var string = $(data).find('string');

				thisFile.attr({
					'href' : string.text(),
					'target' : '_blank'
				}).addClass('external-link');


			});

		});
	}


});






