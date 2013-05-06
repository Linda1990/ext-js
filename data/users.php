<?php
$list = array(
	'success' => true,
	'users' => array(
		array("id" => 1, "name"=> "Ew", "email"=> "ed1@sencha.com"),
		array("id" => 2, "name"=> "Ew", "email"=> "ed1@sencha.com"),
		array("id" => 3, "name"=> "Ew", "email"=> "ed1@sencha.com"),
		array("id" => 4, "name"=> "Ew", "email"=> "ed1@sencha.com"),
		array("id" => 5, "name"=> "Ew", "email"=> "ed1@sencha.com"),
		array("id" => 6, "name"=> "Ew", "email"=> "ed1@sencha.com"),	
	)
);

echo json_encode($list);
exit;

?>