<?php

require_once('./phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$name = $_POST['user_name'];
//$subname = $_POST['user_subName'];
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$address = $_POST['user_address'];
$water_name = $_POST['water_name'];
$water_count = $_POST['water_count'];
$water_date = $_POST['water_date'];
$water_time = $_POST['water_time'];
$user_comment = $_POST['user_comment'];

//$email = $_POST['user_mail'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'zayavkavoda21@bk.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'asssjghasoj2gasl2'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('zayavkavoda21@bk.ru'); // от кого будет уходить письмо?
$mail->addAddress('voda21rus@bk.ru');     // Кому будет уходить письмо
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта на доставку';
$mail->Body    = 'Пользователь: '  .$name  . ' Телефон: ' . $phone . ' Адресс: ' . $address . ' Вода: ' . $water_name . ' Количество: ' . $water_count . ' Дата: ' . $water_date . ' Время: ' . $water_time . ' Комментарий: ' . $user_comment;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: index.html');
}
?>
