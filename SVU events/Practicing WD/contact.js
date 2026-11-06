const form = document.getElementById("theform");
const alertBox = document.getElementById("formAlert");

form.noValidate = true;

function showAlert(text, type) {
    alertBox.textContent = text;                
    alertBox.className = "alert alert-" + type; 
}

form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("emailaddress").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
        showAlert("Please enter your full name.", "danger");
        return;
    }

    if (name.length < 3) {
        showAlert("Your name must be at least 3 characters.", "danger");
        return;
    }

    if (email === "") {
        showAlert("Please enter your email address.", "danger");
        return;
    }

    if (!emailPattern.test(email)) { 
        showAlert("Please enter a valid email address.", "danger");
        return;
    }

    if (message === "") {
        showAlert("Please write a message.", "danger");
        return;
    }

    if (message.length < 10) {
        showAlert("Your message must be at least 10 characters.", "danger");
        return;
    }

    showAlert("Thank you! Your message was sent successfully.", "success");
    form.reset(); 
});
