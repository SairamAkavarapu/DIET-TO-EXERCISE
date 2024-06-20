document.getElementById("signin-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    // Get username and password values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // You can add validation or further processing here before submitting the form
  
    // Simulate form submission (You would handle this differently in a real scenario)
    console.log("Signing in with username:", username, "and password:", password);
  
    // Redirect to the main page (replace "main.html" with your actual main page URL)
    window.location.href = "main.html";
  });
  