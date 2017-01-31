<?php
/**
 * Functions
 *
 * @package TH
 */


/**
 * Convert name to slug.
 * @param string { $var_name } neat name to convert to a slug
*/
function create_slug( $var_name ) {

	$var_slug = "";

	if ( empty( $var_name ) ) :
		$var_slug = '';
	else :
		$var_slug = strtolower( str_replace(' ', '-', $var_name) );
	endif;

	return $var_slug;
	
}


/**
 * Parse file using parsedown.php
 * @param string { $file }. markdown file to parse
*/
function parse_this( $file ) {

	if ( class_exists( 'parsedown' ) ) :

		$parse = new parsedown();

		$text = file_get_contents( $file );
	
		echo $parse->text($text);

	endif;

}


/**
 * Get page title based on working directory.
 * Code assumes folder names contain hyphens where spaces would be
 * @param boolean { $include_subtext }. whether or not to include underscore-separated subtext
*/
function get_current_directory( $include_subtext ) {

	// get current directory path
	$current_dir = getcwd();

	// split path into folders
	$current_dir = explode( '/', $current_dir );
	
	// skim last folder
	$current_dir = end( $current_dir );

	// title case
	$page_title = get_pretty_name( $current_dir );

	$pretty_name = $page_title['text'];

	// if there's subtext ...
	if ( !empty( $page_title['subtext'] ) ) :
		// format it
		$pretty_name .= ': ' . $page_title['subtext'];

	endif;

	return $pretty_name;

}


/**
 * List all folders inside a directory
 * @param string { $directory }. directory to search in
 * @param boolean { $descending }. sort descending
*/
function list_links( $directory, $descending ) {

	// $descending = '';

	if ( $descending == true ) :
		$descending = SCANDIR_SORT_DESCENDING;
	endif; 

	// don't list these files
	$ignore = array( '.', '..', 'ignore', '.DS_Store', 'index.php' );
	
	// get the list of files in the directory
	$files = scandir( $directory, $descending );
	
	if ( !empty( $files ) ) :

		$links = '<ul class="directory-list">';
		// process each filename
		foreach ( $files as $file ) {

			$link_text = '';
			$link_subtext = '';

			// skip files we want to ignore
			if ( in_array( $file, $ignore ) ) continue;

			// process files we want to display
			else { 

				$pretty_name = get_pretty_name( $file );
				
				// if there's subtext ...
				if ( $pretty_name['subtext'] !== '' ) :
					// format it
					$link_subtext = '<span class="sub-text">' . $pretty_name['subtext'] . '</span>';
				endif;

				// build the link
				$links .= '<li><a href="'. $directory. '/' . $file . '">' . $pretty_name['text'] . $link_subtext . '<div class="triangle right float-right"></div></a></li>';
			}
		}

		$links .= '</ul>';

		return $links;

	endif;

}


/**
 * Remove hyphens, set to titlecase.
 * @param string { $text }. text to filter
*/
function strip_hyphens( $text ) {

	$result = "";

	$exceptions = array("css", "html", "and", "for", "or", "nor", "but", "so");

	if ( $text[0] == "-") :
		$text = substr_replace($text, "&#9679;", 0, 1);
	endif;	

	$text = str_replace('-', ' ', $text );

	$words = explode(" ", $text);

	foreach ( $words as $word ) {
		if ( in_array( $word, $exceptions ) )
			$result .= " " . strtoupper( $word );
		else 
			$result .= " " . ucfirst( $word );
	}

	return $result;

}


/**
 * Process and format folder or file names
 * @param string { $file }. filename to format
*/
function get_pretty_name( $file ) {

	// reset
	$pretty_name = '';
	$link_text = $file;
	$link_subtext = '';

	// if there's a file extension
	if ( strpos($file, '.') !== false ) :
		
		// remove it
		$link_text = substr( $file, 0, strpos( $file, "." ) );

	endif;

	// if filename contains subtext (indicated by an underscore)
	if ( strpos($link_text, '_') !== false ) :

		// explode on the underscore
		$split_file = explode('_', $link_text);
		
		// link text = first value
		$link_text = strip_hyphens( $split_file[0] );
		
		// subtext = second value, all other values are ignored
		$link_subtext = strip_hyphens( $split_file[1] );

	else :
		
		$link_text = strip_hyphens( $file );

	endif;

	$pretty_name['text'] = $link_text;
	$pretty_name['subtext'] = $link_subtext;

	return $pretty_name;

}


/**
 * Add google analytics.
 * Should be used in the footer 
*/
function add_google_analytics() { 
	
	echo '<script type="text/javascript">';
	echo '//<![CDATA[';
	echo "\r\n";
	echo "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){";
	echo "(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),";
	echo "m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)";
	echo "})(window,document,'script','//www.google-analytics.com/analytics.js','ga');";
	echo "\r\n";
	echo "ga('create', 'UA-54281483-1', 'auto');";
	echo "ga('send', 'pageview');";
	echo "\r\n";
	echo '//]]>';
	echo '</script>';

}

?>