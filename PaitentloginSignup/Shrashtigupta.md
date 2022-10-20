<!DOCTYPE html>
<html lang="en" dir="ltr">_
   <head>
      <meta charset="utf-8">
      <title>Login and Registration Form in HTML</title>
      <link rel="stylesheet" href="Login2.css">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
   </head>
   <body >
            <div class="wrapper">
         <div class="title-text">
            <div class="title login">
               Login Form
            </div>
            <div class="title signup">
               Signup Form
            </div>
         </div>
         <div class="form-container">
            <div class="slide-controls">
               <input type="radio" name="slide" id="login" checked>
               <input type="radio" name="slide" id="signup">
               <label for="login" class="slide login">Patient Login</label>
               <label for="signup" class="slide signup">Patient Signup</label>
               <div class="slider-tab"></div>
            </div>
            <div class="form-inner">
               <form action="#" class="login">
                  <div class="field">
                     <input type="text" placeholder="Email Address" required>
                  </div>
                  <div class="field">
                     <input type="password" placeholder="Password" required>

                  </div>
                  <div class="pass-link">
                     <a href="#">Forgot password?</a>
                  </div>
                  <div class="field btn">
                     <div class="btn-layer"></div>
                     <input type="submit" value="Login">
                  </div>
                  
                  <div class="signup-link">
                     Not a member? <a href="">Signup now here</a>
                  </div>
                  <div class = "line" >
                  </div>
                  <div class ="media-option">
                     <a href="#" class="field google">
                         <i class='bx bxl-google' ></i>
                         <a href="https://accounts.google.com/v3/signin/identifier?dsh=S-519597540%3A1665260692572601&authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F&ec=GAlAwAE&hl=en&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession" > Login with google</a>
                 </div>
               </form>
               <form action="#" class="signup">
                  <div class="field">
                     <input type="text" placeholder="Patient Name" required>
                  </div>
                  <div class="field">
                     <input type="text" placeholder="Email Address" required>
                  </div>
                  <div class="field">
                     <input type="password" placeholder=" New password" required>
                  </div>
                  <div class="field">
                     <input type="password" placeholder="Confirm password " required>
                  </div>
                  <div class="field btn">
                     <div class="btn-layer"></div>
                     <input type="submit" value="Signup">
                  </div>
               </form>
            </div>
         </div>
      </div>
      <script>
         const loginText = document.querySelector(".title-text .login");
         const loginForm = document.querySelector("form.login");
         const loginBtn = document.querySelector("label.login");
         const signupBtn = document.querySelector("label.signup");
         const signupLink = document.querySelector("form .signup-link a");
         signupBtn.onclick = (()=>{
           loginForm.style.marginLeft = "-50%";
           loginText.style.marginLeft = "-50%";
         });
         loginBtn.onclick = (()=>{
           loginForm.style.marginLeft = "0%";
           loginText.style.marginLeft = "0%";
         });
         signupLink.onclick = (()=>{
           signupBtn.click();
           return false;
         });
      </script>
   </body>
</html>

  output:
  ![Screenshot (254)](https://user-images.githubusercontent.com/110158906/197017815-9ae04c33-4b52-45d7-9434-ec1a981c1d96.png)


  
