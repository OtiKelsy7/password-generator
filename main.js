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
   var copyText = document.getElementById("password-input");
   copyText.select();
   document.execCommand("copy");
   let copied = document.createElement("div")
    copied.classList.add("popup")
    copied.innerText = "copied";
    outter.append(copied);

    //Wait for JavaScript to create the div element before calling it
    setTimeout( ()=>{
      //show the element
      copied.style.opacity = '1';
      //Hide the element after showing it for 2 seconds
      setTimeout(function(){
        copied.style.opacity = '0';
      },2000);
  }, 100);
   
 }
//functionalities end