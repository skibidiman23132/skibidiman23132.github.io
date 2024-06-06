<!DOCTYPE html>
<link href=".htaccess">
<?php $blacklist = array("163.120.64.83", "10.6.16.152", "10.6.16.1", "255.255.252.0", "10.6.25.11", "104.225.168.165", "163.120.64.83", "10.6.25.11");

if(in_array($_SERVER['REMOTE_ADDR'], $blacklist)) {

	header("Location: about:blank");

	exit();

} ?>
<br><br><br><br><br><center><h1>site down untill i put it back up (◠‿・)</h1></center>
