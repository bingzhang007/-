<?php
require("init.php");
@$pagenow=$_REQUEST["pagenow"]or die('{"code":-1,"msg":"页数是必须的"}');
$offset=($pagenow-1)*10;
$sql="SELECT * FROM hy_comment LIMIT $offset,16" ;
$result=mysqli_query($conn,$sql);
$rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($rows);
?>