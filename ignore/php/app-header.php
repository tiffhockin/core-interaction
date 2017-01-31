<?php
/**
 * App Header
 *
 * Load assets, variables, functions, etc. (setup!)
 *
 * @package TH
 */

$doc_root = $_SERVER["DOCUMENT_ROOT"] . '/ignore/';

// Display errors
// ini_set('display_errors', 0);

// Functions
$functions = $doc_root . 'php/app-functions.php';
if ( file_exists( $functions ) ) :
	include( $functions );
endif;

// Header
$header = $doc_root . 'header-parsedown.html';
if ( file_exists( $header ) ) :
	include( $header );
endif;

// Parsedown
// http://parsedown.org/
$parsedown = $doc_root . 'php/parsedown.php';
if ( file_exists( $parsedown ) ) :
	include( $parsedown );
endif;

?>