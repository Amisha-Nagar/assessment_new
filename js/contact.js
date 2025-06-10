//Contact form js
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = document.getElementById("nameInput").value;
    const emailInput = document.getElementById("emailInput").value;
    const message = document.getElementById("message").value;

    let isValid = true;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(nameInput)) {
    document.getElementById("nameError").textContent = 
    "Please enter a valid first name, no special characters or spaces allowed.";
        isValid = false;
    }
    
    const emailRegex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/;
    if (!emailRegex.test(emailInput)) {
    document.getElementById("emailError").textContent = 
    "Please enter a valid email address.";
        isValid = false;
    }
  
    const messageError = document.getElementById('messageError');
    if (message.length < 10) {messageError.textContent = 
    "Your message must be at least 10 characters.";
        isValid = false;
    }
 
    if (isValid) {
      alert
      ("Submitted Successfully! Amisha will reach out to you soon.");
    }         
});
  