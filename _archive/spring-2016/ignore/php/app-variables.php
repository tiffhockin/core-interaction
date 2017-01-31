<?php
/**
 * Variables
 *
 * @param $doc_root
 *
 * @package TH
 */

$doc_host = 'http://' . $_SERVER["HTTP_HOST"] . '/';

// displayed on the home page
$site_title = 'Core Interaction';

// what semester are we in?
$term_name = 'Spring 2016';

$term_slug  = '';
$page_title = '';
$page_slug  = '';

if ( function_exists('create_slug') ) :
	// create a slug based on semester
	$term_slug = create_slug( $term_name );
endif;

if ( function_exists('get_current_directory') ) :
	// which folder are we in?
	$page_title = get_current_directory( true );
	// create a slug based on active directory
	$page_slug = get_current_directory( false );
endif;


/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	Header Variables
------------------------------ */

// assets
$favicon = $doc_host . 'favicon.png';
$stylesheet = $doc_host . 'assets/scss/style.css';

if ( empty( $added_class ) || $added_class == '' ) :

	$added_class = '';

endif;

// <title>, title
// if no page title exists or if we're at the root, page title may be empty
if ( empty( $page_title ) || $page_title == '' || $added_class == 'home' ) :
	// display the site title instead
	$header_title = $site_title;
	$page_title = $site_title;

else :
	// display current page + site title
	$header_title = $page_title . ' &mdash; ' . $site_title;

endif;

$body_class = $term_slug . ' ' . $page_slug . ' ' . $added_class;


/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	Students
------------------------------ */

$server_url = '/students/';

$students = array(
		['Christina','christina'],
		['Connie','connie'],
		['Emma','emma'],
		['Hannah','hannah'],
		['Kaisha','kaisha'],
		['Mali','mali'],
		['Maria','maria'],
		['Matheus','matheus'],
		['Maxine','maxine'],
		['Olive','olive'],
		['Pauline','pauline'],
		['Peter','peter'],
		['Wendy','wendy']
	);

$num_students = count( $students );

$random_student = mt_rand( 0, $num_students - 1 );

?>