
//     // const outerDiv = document.getElementById("out");
//     // const passwordDiv = document.createElement("Div");
//     // passwordDiv.classList.add("under");
//     // outerDiv.append(passwordDiv)

// //functionalities start
//     let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let passwordLength = 8;
//     let generatedPassword = ""
//     const input = document.getElementById("password-input");

//     const button = document.getElementById("password-button");
//     for(let i = 0; i<= passwordLength; i++) {
//         const new1 = Math.floor(Math.random() * chars.length)
//     }

//     button.addEventListener("click", ()=> {
       
//     })

//     input.value = new1;

//     function generate() {
        
//     }
var password=document.getElementById("password-input");

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
//functionalities end