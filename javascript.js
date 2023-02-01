const passwordInvalid = document.querySelector(".invalid-pass");
const passwordInputs = document.querySelectorAll(".password");


window.addEventListener("onload",checkValid())
passwordInputs.forEach(password => password.addEventListener('input', checkValid))

function checkValid(){
    if ((passwordInputs[0]['value'] == "") ||
        (passwordInputs[0]['value'] != passwordInputs[1]['value'])){
        
        setInvalid()
    } else {
        removeInvalid()
    }
}

function setInvalid(){
    passwordInputs.forEach(password => password.classList.add("invalid"))
    passwordInvalid.style.color = 'red';
}

function removeInvalid(){
    passwordInputs.forEach(password => password.classList.remove('invalid'))
    passwordInvalid.style.color = 'white';
}

