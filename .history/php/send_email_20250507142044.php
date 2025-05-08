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
$body = $data['email_message'] ?? '';
$first_name = $data['firstName'] ?? '';
$last_name = $data['lastName'] ?? '';
$email = $data['email'] ?? '';

file_put_contents("log.txt", file_get_contents("php://input"));

// ClickSend setup
require_once(__DIR__ . '/vendor/autoload.php');
$config = ClickSend\Configuration::getDefaultConfiguration()
              ->setUsername('excellentaccountant@outlook.com')
              ->setPassword('72C2D3EC-A5F0-04B6-E744-96D1B73563B4');


// Send email
$apiInstance = new ClickSend\Api\TransactionalEmailApi(new GuzzleHttp\Client(),$config);
$email = new \ClickSend\Model\Email(); // \ClickSend\Model\Email | Email model
$email_recipient=new \ClickSend\Model\EmailRecipient();
$email_recipient->setEmail("excellentaccountant@outlook.com");
$email_recipient->setName("John Doe");
$email_from=new \ClickSend\Model\EmailFrom();
$email_from->setEmailAddressId(4366);
$email_from->setName("Joanne Doe");
$attachment = new \ClickSend\Model\Attachment();
$attachment->setContent("ZmlsZSBjb250ZW50cw==");
$attachment->setType("text/plain");
$attachment->setFilename("text.txt");
$attachment->setDisposition("attachment");
$attachment->setContentId("text");
$email->setTo([$email_recipient]);
$email->setFrom($email_from);
$email->setSubject("Test subject");
$email->setBody($body);

try {
    $result = $apiInstance->emailSendPost($email);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TransactionalEmailApi->emailSendPost: ', $e->getMessage(), PHP_EOL;
}
?>