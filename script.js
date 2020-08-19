const form = document.querySelector(".form");
const errorIcon = document.querySelector(".error-icon");
const errorMsg = document.querySelector(".error-msg");
const email = document.querySelector(".email");

clearFields();

function clearFields() {
    email.value = '';
}

form.addEventListener("click", e => {
    e.preventDefault();
    const emailValue = email.value.trim();

    if ((e.target && e.target.nodeName === "BUTTON") || (e.target && e.target.nodeName === "IMG")) {

        if (emailValue === "") {
            email.className = "email error-box";
            errorIcon.style.opacity = "1";
            errorMsg.style.opacity = "1";
        } else if (!validEmail(emailValue)){
            email.className = "email error-box";
            errorIcon.style.opacity = "1";
            errorMsg.style.opacity = "1";
        } else {
            email.className = "email success-box";
            errorIcon.style.opacity = "0";
            errorMsg.style.opacity = "0";
        }
    }

});

function validEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
}
