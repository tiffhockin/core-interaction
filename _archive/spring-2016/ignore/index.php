<?php 
// we don't want to view this folder
// it's just for tidyness
$doc_host = 'http://' . $_SERVER["HTTP_HOST"] . '/';
header("Location: $doc_host"); ?>