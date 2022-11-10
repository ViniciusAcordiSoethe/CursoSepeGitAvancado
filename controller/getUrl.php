<?php
$html = 'hookerYoutubeSelma';

preg_match_all('~(?:https?://)?(?:www.)?(?:youtube.com|youtu.be)/(?:watch?v=)?([^\s]+)~', $html, $match); // preg_match of youtube

?>