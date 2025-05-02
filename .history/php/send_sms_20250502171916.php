<?php
header("Access-Control-Allow-Origin: *"); // Allow any origin
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$to = $data['phone'];
$message = $data['message'];

$username = 'excellentaccountant@outlook.com';
$api_key = '72C2D3EC-A5F0-04B6-E744-96D1B73563B4';

$postData = array(
    "messages" => array(
        array(
            "source" => "php",
            "body" => $message,
            "to" => `+61$to`,
            "schedule" => null,
            "custom_string" => "ReactSMS"
        )
    )
);

$ch = curl_init('https://rest.clicksend.com/v3/sms/send');
curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
curl_setopt($ch, CURLOPT_USERPWD, "$username:$api_key");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postData));
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));

$response = curl_exec($ch);
curl_close($ch);

echo $response;
