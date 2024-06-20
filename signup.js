document.getElementById("signUpForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get form inputs
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var mobile = document.getElementById("mobile").value;
    var gender = document.getElementById("gender").value;
    var errorMessage = document.getElementById("error-message");
  
    // Validate email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Invalid email address!";
        errorMessage.style.color = "red";
        return;
    }
  
    // Validate password match
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        errorMessage.style.color = "red";
        return;
    }

    if (mobile.length !== 10) {
        errorMessage.textContent = "wrong mobile number";
        errorMessage.style.color = "red";
        return;
    }
  
    // Redirect to home page if all inputs are valid
    window.location.href = "main.html"; // Replace "main.html" with the URL of your home page
  });
  