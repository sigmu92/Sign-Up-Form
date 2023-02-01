const passwordInvalid = document.querySelector(".invalid-pass");
const passwordInputs = document.querySelectorAll(".password");

window.addEventListener("load",checkValid())
console.log(passwordInputs[0])

function checkValid(){
    if (passwordInputs[0]['textContent']==""){
        passwordInputs[0]['validity']['valid'] = false;
    }
}

