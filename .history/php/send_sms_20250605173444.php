
<?php
// List of allowed origins
$allowedOrigins = [
    'https://onlinetaxrefundtoday.com.au',
    'https://www.onlinetaxrefundtoday.com.au'
];

// Get the request's Origin header
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

// Check if the origin is in your allowed list
if (in_array($origin, $allowedOrigins)) {
    header("Access-Control-Allow-Origin: $origin");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
}

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

header("Content-Type: application/json");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Read JSON input
$data = json_decode(file_get_contents("php://input"), true);
$tax_year = $data['taxYear'] ?? '';
$to = $data['phone'] ?? '';
$first_name = $data['firstName'] ?? '';
$last_name = $data['lastName'] ?? '';
$email_address = $data['email'] ?? '';
$dob = $data['dob'] ?? '';
$tfn = $data['tfn'] ?? '';
$referral = $data['referral'] ?? '';
$body = $data['sms_message'] ?? '';
$consent = $data['consent'] ?? 'no';
$accName = $data['accName'] ?? '';
$bsb = $data['bsb'] ?? '';
$account_number = $data['acc'] ?? '';
$upfront_consent = $data['processConsent'] ?? 'no';

// Log the request for debugging
$sanitizedLog = $data;
$sanitizedLog['tfn'] = '***';
$sanitizedLog['dob'] = '***';
$sanitizedLog['acc'] = '***';
$sanitizedLog['bsb'] = '***';
file_put_contents("log.txt", json_encode($sanitizedLog) . "\n", FILE_APPEND);

// Validate required fields


// Connect to DB (adjust your DB credentials)
$mysqli = new mysqli("127.0.0.1", "onlineta_info", "Dlforms00", "onlineta_onlinetaxrefundtoday");

if ($mysqli->connect_error) {
        echo json_encode(['success' => false, 'error' => 'Database connection failed.']);
    exit;
}

// Prepare statement to check duplicate entry
$stmt = $mysqli->prepare("SELECT COUNT(*) FROM tax_submissions WHERE tfn = ? AND tax_year = ?");
$stmt->bind_param("ss", $tfn, $tax_year);
$stmt->execute();
$stmt->bind_result($count);
$stmt->fetch();
$stmt->close();

if ($count > 0) {
    echo json_encode(['success' => false, 'error' => 'Duplicate submission detected.']);
    exit;
}

// If no duplicate, insert data
$stmt = $mysqli->prepare("INSERT INTO tax_submissions (
    tax_year, phone, first_name, last_name, email_address, dob, tfn, referral,
    sms_message, consent, account_name, bsb, account_number, upfront_consent
) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

$stmt->bind_param("ssssssssssssss",
    $tax_year, $to, $first_name, $last_name, $email_address, $dob, $tfn, $referral,
    $body, $consent, $accName, $bsb, $account_number, $upfront_consent
);

if ($stmt->execute()) {

    require_once __DIR__ . '/vendor/autoload.php';

    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->load();

    // ClickSend setup

    $config = ClickSend\Configuration::getDefaultConfiguration()
        ->setUsername(getenv('CLICKSEND_USERNAME'))
        ->setPassword(getenv('CLICKSEND_API_KEY'));

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
        $email_recipient->setEmail("ionlinetaxrefundtoday@gmail.com");
        $email_recipient->setName("Raegun Lee");

        $email_from = new \ClickSend\Model\EmailFrom();
        $email_from->setEmailAddressId(31388);
        $email_from->setName("OnlineTaxRefundToday web application System from $first_name");

        $email = new \ClickSend\Model\Email();
        $email->setTo([$email_recipient]);
        $email->setFrom($email_from);
        $email->setSubject("System notification: New message from $first_name $last_name");
        $email->setBody("new message from online client <br><br>
            
            Phone: $to, <br>
            Tax Year: $tax_year, <br>
            First Name: $first_name, <br>
            Last Name: $last_name, <br>
            Email Address: $email_address, <br>
            Date of Birth: $dob, <br>
            TFN: $tfn, <br>
            Referral: $referral, <br>
            Consent: $consent, <br>
            Upfront Consent: $upfront_consent, <br>
            Account Name: $accName, <br>
            BSB: $bsb, <br>
            Account Number: $account_number <br>
            Add new client to tax portal and proceed tax return");

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

} else {
    echo json_encode(['success' => false, 'error' => $stmt->error]);
}

$stmt->close();
$mysqli->close();
?>
