<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$token = "7a55204fb9d7076b6d73b3bc5d8ed2849d86a26e";
$data = '[{"id": 1, "text": "First"},{"id": 2, "text": "Second"}]';

$headers = apache_request_headers();
if (array_key_exists("x-api-key", $headers) 
	&& $headers["x-api-key"] == $token) {
	http_response_code(200);
	echo json_encode($data);
} else {
	http_response_code(401);
	echo "NINCS HOZZAFERESED!!!";
}
?>