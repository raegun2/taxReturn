

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
$first_name = $data['firstName'] ?? '';
$last_name = $data['lastName'] ?? '';
$email_address = $data['email'] ?? '';
$dob = $data['dob'] ?? '';
$tfn = $data['tfn'] ?? '';
$referral = $data['referral'] ?? '';
$body = $data['sms_message'] ?? '';
$consent = $data['consent'] ?? 'no';
$consent = $consent == 'yes' ? 'yes' : 'no';


file_put_contents("log.txt", file_get_contents("php://input"));


// ClickSend setup
require_once(__DIR__ . '/vendor/autoload.php');

$config = ClickSend\Configuration::getDefaultConfiguration()
              ->setUsername('excellentaccountant@outlook.com')
              ->setPassword('72C2D3EC-A5F0-04B6-E744-96D1B73563B4');
$response = [];

try {
    // === SEND SMS ===
    $smsApi = new ClickSend\Api\SMSApi(new GuzzleHttp\Client(), $config);
    $sms = new \ClickSend\Model\SmsMessage();
    $sms->setBody($body);
    $sms->setTo($to);
    $sms->setSource("php-sdk");

    $sms_collection = new \ClickSend\Model\SmsMessageCollection();
    $sms_collection->setMessages([$sms]);

    $sms_result = $smsApi->smsSendPost($sms_collection);
    $response['sms'] = $sms_result;

    // === SEND EMAIL ===
    $emailApi = new ClickSend\Api\TransactionalEmailApi(new GuzzleHttp\Client(), $config);

    $email_recipient = new \ClickSend\Model\EmailRecipient();
    $email_recipient->setEmail("erosapollon81@gmail.com");
    $email_recipient->setName("Raegun Lee");

    $email_from = new \ClickSend\Model\EmailFrom();
    $email_from->setEmailAddressId(31228); // Use your verified sender ID from ClickSend
    $email_from->setName("tax web applcation System");

    $email = new \ClickSend\Model\Email();
    $email->setTo([$email_recipient]);
    $email->setFrom($email_from);
    $email->setSubject("System notification: New message from $first_name $last_name");
    $email->setBody("new message from online client <br> <br>
                Phone : $to, <br>
                Frist Name : $first_name, <br>
                Last Name : $last_name, <br>
                Email Address : $email_address, <br>
                Date of Birth : $dob, <br>
                TFN : $tfn, <br>
                Referral : $referral, <br>
                consent : $consent, <br> <br>
                add new client to tax portal and proceed tax return");

    $email_result = $emailApi->emailSendPost($email);
    $response['email'] = $email_result;

    echo json_encode(['success' => true, 'response' => $response]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
?>