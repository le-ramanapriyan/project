<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>register page</title>
    <link rel="stylesheet" href="style.css" type="text/css">
</head>
<body>
<?php

    if(!empty($_POST["submit"])){
        $fname=$_post['fname'];
        $lname=$_post['lname'];
        $email=$_post['email'];
        $password=$_post['password'];
        $message=$_post['message'];

$from = 'forms.mycollegewebsite000001.com';
$_toemail = 'ramanaak04@gmail.com';
$body = "First Name:" $fname.\r\n
        "Last Name:" $lname.\r\n
        "email:" $email.\r\n
        "password:" $password.\r\n
        "message:" $message\r\n;

$header = "from:".$from.
          "Reply-To:".$email;

mail($_toemail,$subject,$body,$header);
header("Location:index.html");
}

?>
    
</body>
</html>