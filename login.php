<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$token = "7a55204fb9d7076b6d73b3bc5d8ed2849d86a26e";
$user = "admin";
$password = "Admin123";

$data = json_decode(file_get_contents('php://input'), true);
if (array_key_exists("user", $data) 
	&& array_key_exists("password", $data) ) {
	  if($data["user"]==$user && $data["password"]==$password){
		http_response_code(200);		
		echo json_encode($token);
	  } else {
		http_response_code(401);
		echo "NINCS HOZZAFERESED!!!";
	  }
} else {
	http_response_code(401);
	echo "NINCS HOZZAFERESED!!!";
}
?>