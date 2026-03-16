<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');

// CORS pour les tests locaux et la prod
$allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://eden-businesscenter.org',
    'https://www.eden-businesscenter.org',
];

if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowedOrigins, true)) {
    header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
    header('Vary: Origin');
}

header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'ok' => false,
        'message' => 'Méthode non autorisée.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode([
        'ok' => false,
        'message' => 'Corps de requête invalide.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Honeypot anti-spam
$website = trim((string)($data['website'] ?? ''));
if ($website !== '') {
    echo json_encode([
        'ok' => true,
        'message' => 'Message envoyé.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Nettoyage
$name = trim((string)($data['name'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$phone = trim((string)($data['phone'] ?? ''));
$subject = trim((string)($data['subject'] ?? ''));
$message = trim((string)($data['message'] ?? ''));

// Validation
if ($name === '' || $email === '' || $phone === '' || $subject === '' || $message === '') {
    http_response_code(422);
    echo json_encode([
        'ok' => false,
        'message' => 'Tous les champs sont obligatoires.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode([
        'ok' => false,
        'message' => 'Adresse email invalide.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

if (mb_strlen($name) > 120 || mb_strlen($email) > 190 || mb_strlen($phone) > 50 || mb_strlen($subject) > 180) {
    http_response_code(422);
    echo json_encode([
        'ok' => false,
        'message' => 'Un ou plusieurs champs sont trop longs.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

if (mb_strlen($message) < 10) {
    http_response_code(422);
    echo json_encode([
        'ok' => false,
        'message' => 'Le message est trop court.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Protection entêtes
$nameSafe = str_replace(["\r", "\n"], ' ', $name);
$emailSafe = str_replace(["\r", "\n"], '', $email);
$phoneSafe = str_replace(["\r", "\n"], ' ', $phone);
$subjectSafe = str_replace(["\r", "\n"], ' ', $subject);

$to = 'contact@eden-businesscenter.org';
$mailSubject = 'Nouveau message depuis le site EDEN - ' . $subjectSafe;

$htmlMessage = '
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Nouveau message</title>
</head>
<body style="font-family: Arial, Helvetica, sans-serif; color: #1f2937; line-height: 1.6;">
  <h2 style="color: #006047;">Nouveau message depuis le site EDEN Business Center</h2>

  <p><strong>Nom :</strong> ' . htmlspecialchars($nameSafe, ENT_QUOTES, 'UTF-8') . '</p>
  <p><strong>Email :</strong> ' . htmlspecialchars($emailSafe, ENT_QUOTES, 'UTF-8') . '</p>
  <p><strong>Téléphone :</strong> ' . htmlspecialchars($phoneSafe, ENT_QUOTES, 'UTF-8') . '</p>
  <p><strong>Sujet :</strong> ' . htmlspecialchars($subjectSafe, ENT_QUOTES, 'UTF-8') . '</p>

  <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;">

  <p><strong>Message :</strong></p>
  <div style="white-space: pre-line;">' . nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8')) . '</div>
</body>
</html>';

$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: EDEN Business Center <contact@eden-businesscenter.org>',
    'Reply-To: ' . $emailSafe,
    'X-Mailer: PHP/' . phpversion(),
];

$encodedSubject = mb_encode_mimeheader($mailSubject, 'UTF-8');

$sent = mail(
    $to,
    $encodedSubject,
    $htmlMessage,
    implode("\r\n", $headers)
);

if (!$sent) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'message' => "L'envoi a échoué côté serveur.",
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

echo json_encode([
    'ok' => true,
    'message' => 'Votre message a bien été envoyé.',
], JSON_UNESCAPED_UNICODE);