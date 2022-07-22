<!DOCTYPE HTML>  
<html lang="en">
<head>
    <title>PHP Form</title>
    <meta charset="utf-8">
  <link rel="stylesheet" href="hotel.css">
     
    <script>
        
    function processData(){
  
        
        document.write(myForm);
    }
    </script>
    
</head>
<body> 
    <div id="submitted">
     <nav>
    <ol>
    <li><a href="Royal Palace.html">Home</a> &nbsp;</li>
    <li><a href="activites.html">Activites &amp; Services</a> &nbsp; </li>
    <li><a href="menu.html">Menu</a> &nbsp; </li> 
    <li><a href="reservation.html">Reservation</a> &nbsp; </li> 
    <li><a href="contact.html">Contact Us</a> &nbsp;</li>
    <li><a href="price.html">Price</a>&nbsp;</li>
    </ol>
    </nav>
    <?php 
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $selectOption = $_POST['selectOption'];
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $myComments = $_POST['myComments'];
        echo("You want more information on option number $selectOption. Your name is $name email address is $email and your phone number is $phone and your comment/concern is $myComments. You will get an email shortly regrading your query. Thank you for contacting Royal Palace Hotel.");
       
    }
    ?>
   <?php
    echo "<br>";
    echo "<br>";
    echo "<br>";
    echo "<br>";
    echo "<br>";
    echo "<br>";
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST["name"];
        $email =$_POST["email"];
        $selectOption = $_POST["selectOption"];
        $phone = $_POST["phone"];
        $myComments = $_POST["myComments"];        
            echo "<h2>Your Information:</h2>";
            echo("You want more information on option number $selectOption <br> Your name is $name  <br> Your email address is $email  <br> Your phone number is $phone  <br> Your comment/concern is $myComments");
    }
        ?>
    </div>
    </body>
    </html>