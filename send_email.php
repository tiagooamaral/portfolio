<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require __DIR__ . '\vendor\PHPMailer-master\PHPMailer-master\src\Exception.php';
require __DIR__ . '\vendor\PHPMailer-master\PHPMailer-master\src\PHPMailer.php';
require __DIR__ . '\vendor\PHPMailer-master\PHPMailer-master\src\SMTP.php';

// Verificar resposta do reCAPTCHA
$recaptcha_response = $_POST['g-recaptcha-response'];

// Chave secreta do reCAPTCHA
$recaptcha_secret = '6Lf8CWMmAAAAAFhSuwBCVrmlJoVjk1F0HN-TSFo0';

// Fazer a verificação com o reCAPTCHA
$recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
$recaptcha_data = [
    'secret' => $recaptcha_secret,
    'response' => $recaptcha_response
];

$recaptcha_options = [
    'http' => [
        'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
        'method' => 'POST',
        'content' => http_build_query($recaptcha_data)
    ]
];

$recaptcha_context = stream_context_create($recaptcha_options);
$recaptcha_result = file_get_contents($recaptcha_url, false, $recaptcha_context);
$recaptcha_response_data = json_decode($recaptcha_result);

if ($recaptcha_response_data->success) {
    // A verificação do reCAPTCHA foi bem-sucedida
    if (isset($_POST)) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        $subject = $_POST['subject'];

        $to = 'tglamaral@gmail.com'; // Replace with your email address
        $subject = $subject;

        // Create an instance of PHPMailer
        $mail = new PHPMailer();

        // Set up SMTP configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Replace with your SMTP server
        $mail->Port = 587; // Replace with your SMTP port
        $mail->SMTPAuth = true;
        $mail->Username = 'site-tiagooamaral@gmail.com'; // Replace with your SMTP username
        $mail->Password = 'vwhtmsyqjtfbztgf'; // Replace with your SMTP password

        // Set up email content
        $mail->setFrom($email, $name);
        $mail->addAddress($to);
        $mail->Subject = $subject;
        $mail->Body = $message;

        // Send email
        if ($mail->send()) {
            echo "Email sent successfully!";
        } else {
            echo "Failed to send email. Please try again.";
            header('Location:/portfolio');
        }
    }
} else {
    // A verificação do reCAPTCHA falhou
    echo "Failed";
    header('Location:/portfolio');
}
