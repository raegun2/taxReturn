<?php
// List of allowed origins
$allowedOrigins = [
    'https://onlinetaxrefundtoday.com.au',
    'https://www.onlinetaxrefundtoday.com.au',
    'http://localhost:5173', // Add localhost for local development
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
    http_response_code(200);
    exit();
}

ob_start(); // Start output buffering to capture any errors or warnings

$config_pass = require('/xampp/htdocs/mytax/config.php'); // /home3/onlineta/config.php or /xampp/htdocs/mytax/config.php
$CLICKSEND_USER = $config_pass['CLICKSEND_USER'] ?? '';
$CLICKSEND_KEY = $config_pass['CLICKSEND_KEY'] ?? '';

header("Content-Type: application/json");
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

function convertDateToMySQLFormat($dateStr) {
    // Example input: "31/05/2025"
    $date = DateTime::createFromFormat('d/m/Y', $dateStr);
    
    if ($date && $date->format('d/m/Y') === $dateStr) {
        return $date->format('Y-m-d'); // Output: "2025-05-31"
    }

    // Return null or throw error if input is invalid
    return null;
}

// Read JSON input
$rawInput = file_get_contents("php://input");
file_put_contents("log.txt", $rawInput);
$data = json_decode($rawInput, true);

$phone = $data['phone'] ?? '';
$first_name = $data['firstName'] ?? '';
$last_name = $data['lastName'] ?? '';
$email_address = $data['email'] ?? '';
$dobInput = $data['dob'] ?? '';
$dob = convertDateToMySQLFormat($dobInput);
$tfn = $data['tfn'] ?? '';
$referral = $data['referral'] ?? '';
$body = $data['sms_message'] ?? '';
$upfront_consent = $data['processConsent'] ?? 'no';
$upfront_consent = $upfront_consent == 'yes' ? 'yes' : 'no';
$accName = $data['accName'] ?? '';
$bsb = $data['bsb'] ?? '';
$account_number = $data['acc'] ?? '';
$tax_year = $data['taxYear'] ?? '';
$consent = $data['consent'] ?? 'no';
$consent = $consent == 'yes' ? 'yes' : 'no';



$mysqli = new mysqli(
  $config_pass['DB_HOST'],
  $config_pass['DB_USER'],
  $config_pass['DB_PASS'],
  $config_pass['DB_NAME']
);

$mysqli->set_charset("utf8mb4");


if ($mysqli->connect_error) {
    echo json_encode(['success' => false, 'error' => 'Database connection failed.']);
    http_response_code(500); // Internal Server Error
    file_put_contents('debug_db_error_log.txt', $mysqli->connect_error);
    exit;
}


// Prepare statement to check duplicate entry
$stmt = $mysqli->prepare("SELECT COUNT(*) FROM tax_submissions WHERE tfn = ? AND tax_year = ?");
$stmt->bind_param("ss", $tfn, $tax_year);
$stmt->execute();
$stmt->bind_result($count);
$stmt->fetch();
$stmt->close();

if (empty($phone) || empty($first_name) || empty($last_name) || empty($email_address) || empty($dob) || empty($tfn) || empty($consent)) {
    ob_clean();
    file_put_contents('debug_missing_fields_log.txt', print_r($data, true));
    echo json_encode(['success' => false, 'error' => 'Required fields are missing.']);
    $mysqli->close();
    http_response_code(400); // Bad Request
    exit;
}

if ($count > 0) {
    // Duplicate submission detected
    ob_clean();
    echo json_encode(['success' => false, 'error' => 'Duplicate submission detected. If this problem persists, Please call us.']);
    $mysqli->close();
    http_response_code(400); // Bad Request
    file_put_contents('debug_duplicate_log.txt', print_r($data, true));
    exit;
}
if ($count == 0) {
    // If no duplicate, insert data
$stmt = $mysqli->prepare("INSERT INTO tax_submissions (
    tax_year, phone, first_name, last_name, email_address, dob, tfn, referral,
    consent, account_name, bsb, account_number, upfront_consent
) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

$stmt->bind_param("sssssssssssss",
    $tax_year, $phone, $first_name, $last_name, $email_address, $dob, $tfn, $referral,
    $consent, $accName, $bsb, $account_number, $upfront_consent
);

$stmt->execute();

    // ClickSend setup
    require_once(__DIR__ . '/vendor/autoload.php');

    $config = ClickSend\Configuration::getDefaultConfiguration()
                ->setUsername($CLICKSEND_USER)
                ->setPassword($CLICKSEND_KEY);
    $response = [];
    
    try {
        // === SEND SMS ===
        $smsApi = new ClickSend\Api\SMSApi(new GuzzleHttp\Client(), $config);
        $sms = new \ClickSend\Model\SmsMessage();
        $sms->setBody($body);
        $sms->setTo($phone); //test number +61411111111 or $phone
        $sms->setSource("php-sdk");

        $sms_collection = new \ClickSend\Model\SmsMessageCollection();
        $sms_collection->setMessages([$sms]);

        $sms_result = $smsApi->smsSendPost($sms_collection);
        $response['sms'] = $sms_result;

        // === SEND EMAIL ===
        $emailApi = new ClickSend\Api\TransactionalEmailApi(new GuzzleHttp\Client(), $config);

        $email_recipient = new \ClickSend\Model\EmailRecipient();
        $email_recipient->setEmail('ionlinetaxrefundtoday@gmail.com');
        $email_recipient->setName('Raegun Lee');

        $email_from = new \ClickSend\Model\EmailFrom();
        $email_from->setEmailAddressId(31388); // Use your verified sender ID from ClickSend
        $email_from->setName("tax web applcation System");

        $email = new \ClickSend\Model\Email();
        $email->setTo([$email_recipient]);
        $email->setFrom($email_from);
        $email->setSubject("System notification: New message from $first_name $last_name");
        $email->setBody("New message from online client <br> <br>
                    EOFY : $tax_year<br>
                    Phone : $phone<br>
                    Frist Name : $first_name<br>
                    Last Name : $last_name<br>
                    Email Address : $email_address<br>
                    Date of Birth : $dob<br>
                    TFN : $tfn<br>
                    Referral : $referral<br>
                    No upfront_consent : $upfront_consent<br>
                    Account_name : $accName<br>
                    BSB : $bsb<br>
                    Account_number : $account_number<br>
                    Consent : $consent<br> <br>

                    Add new client to tax portal and proceed tax return");

        $email_result = $emailApi->emailSendPost($email);
        $response['email'] = $email_result;
        echo json_encode(['success' => true, 'response' => $response]);
        http_response_code(200); // OK

    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'error' => $e->getMessage()
        ]);
    }
$stmt->close();
$mysqli->close();
}
?>