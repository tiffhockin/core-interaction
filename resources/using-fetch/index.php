<?php

$doc_root = $_SERVER["DOCUMENT_ROOT"] . '/ignore/';

// App header
$app_header = $doc_root . 'php/app-header.php';
if ( file_exists($app_header) ) :
	include( $app_header );
endif;

// Parse MD
if ( function_exists('parse_this') ) :
	parse_this('text.md'); 
endif;

// Footer
$footer = $doc_root . 'footer-parsedown.html';
if ( file_exists($footer) ) :
	include( $footer );
endif;

?>