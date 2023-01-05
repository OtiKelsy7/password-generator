
//functionalities start
window.onload = function() {
    const input = document.getElementById("password-input");

    const button = document.getElementById("password-button");

    const outerDiv = document.getElementById("out");
    const passwordDiv = document.createElement("Div");
    passwordDiv.classList.add("under");
    outerDiv.append(passwordDiv)


    button.addEventListener("click", ()=> {
        if(input.value == 0) {
            passwordDiv.style.visibility = "hidden"
        }
       passwordDiv.innerHTML = `
       <li>
         ${input.value}
       </li>
       ` 

       //clearing the input element after click
       input.value = "";
    })
}

//functionalities end