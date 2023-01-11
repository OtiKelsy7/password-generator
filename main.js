//functionalities start
var password=document.getElementById("password-input");
let outter = document.getElementById("out")

 function genPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";
 for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("password-input").value = password;
 }

 function copyPassword() {
   let copyText = document.getElementById("password-input");
   copyText.select();
   document.execCommand("copy");
  
   setTimeout(function(){
     let copied = document.createElement("div")
   copied.classList.add("popup")
   copied.innerText = "copied"
   outter.append(copied)
   },2000);
 }


   
//functionalities end