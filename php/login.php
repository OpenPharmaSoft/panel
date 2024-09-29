<?php
session_start();
$userData = file_get_contents('../user_data.txt');
$lines = explode("\n", $userData);
$credentials = [];
foreach ($lines as $line) {
    list($key, $value) = explode('=', $line);
    $credentials[trim($key)] = trim($value);
}

$username = $_POST['username'];
$password = $_POST['password'];

if (($username === $credentials['admin_username'] && $password === $credentials['admin_password']) ||
    ($username === $credentials['pharmacien_username'] && $password === $credentials['pharmacien_password']) ||
    ($username === $credentials['preparateur_username'] && $password === $credentials['preparateur_password'])) {
    $_SESSION['username'] = $username;
    header('Location: ../home.php');
} else {
    header('Location: ../index.html?error=1');
}
exit();
?>