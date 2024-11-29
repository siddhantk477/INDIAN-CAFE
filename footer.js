// Handle newsletter subscription form submission
document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from reloading the page
  
    const email = document.getElementById('email').value;
  
    if (email) {
      document.getElementById('subscribe-message').textContent = "Thank you for subscribing to our newsletter!";
      document.getElementById('email').value = ''; // Clear the input field
    } else {
      document.getElementById('subscribe-message').textContent = "Please enter a valid email address.";
    }
  });