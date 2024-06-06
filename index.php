<!DOCTYPE html>
<link href=".htaccess">
<?php $deny = array("163.120.64.83","","");
if (in_array ($_SERVER['REMOTE_ADDR'], $deny)) {
   header("location: about:blank");
   exit();
} ?>
<br><br><br><br><br><center><h1>site down untill i put it back up (◠‿・)</h1></center>
