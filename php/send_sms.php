
<?php
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    exit(0);
}

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Read JSON input
$data = json_decode(file_get_contents("php://input"), true);
$to = $data['phone'] ?? '';
$body = $data['message'] ?? '';
file_put_contents("log.txt", file_get_contents("php://input"));


// ClickSend setup
require_once(__DIR__ . '/vendor/autoload.php');
$config = ClickSend\Configuration::getDefaultConfiguration()
              ->setUsername('excellentaccountant@outlook.com')
              ->setPassword('72C2D3EC-A5F0-04B6-E744-96D1B73563B4');

$apiInstance = new ClickSend\Api\SMSApi(new GuzzleHttp\Client(), $config);
$msg = new \ClickSend\Model\SmsMessage();

$msg->setBody($body);
$msg->setTo($to);
$msg->setSource("php-sdk");

$sms_messages = new \ClickSend\Model\SmsMessageCollection();
$sms_messages->setMessages([$msg]);

try {
    $result = $apiInstance->smsSendPost($sms_messages);
    echo json_encode(['success' => true, 'response' => $result]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
?>