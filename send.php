<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$email = $_POST['email'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Формирование самого письма
if ((!isset($_POST['email']))) {
  $title = "Новое обращение Best Tour Plan";
  $body = "
<h2>Новое обращение</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
<b>Сообщение:</b><br>$message
";
} elseif ((isset($_POST['name'])) && (isset($_POST['phone'])) && (isset($_POST['email'])) && (isset($_POST['message']))) {
  $title = "Новая заяка из модального окна";
  $body = "
<h2>Новое обращение</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br>
<b>E-mail:</b> $email<br><br>
<b>Сообщение:</b><br>$message
";
} else {
  $title = "Новая заявка на подписку";
  $body = "
<h2>Новая заявка</h2>
<b>E-mail:</b> $email<br>
";
}


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth = false;
  $mail->SMTPAutoTLS = false;
  // $mail->SMTPDebug = 2;
  $mail->Debugoutput = function ($str, $level) {
    $GLOBALS['status'][] = $str;
  };

  // Настройки вашей почты
  $mail->Host       = 'mail.roman-baukin.ru'; // SMTP сервера вашей почты
  $mail->Username   = 'admin@roman-baukin.ru'; // Логин на почте
  $mail->Password   = 'gggHHH70970588GGGhhh'; // Пароль на почте
  $mail->Port       = 25;
  $mail->setFrom('admin@roman-baukin.ru', 'admin@roman-baukin.ru'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('rbaukin@mail.ru');


  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  // Проверяем отравленность сообщения
  if ($mail->send()) {
    $result = "success";
  } else {
    $result = "error";
  }
} catch (Exception $e) {
  $result = "error";
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');

// Отображение багов
// echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
