// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
  
    // Get values from the form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Check if all fields are filled out
    if (name && email && message) {
      alert(`Thank you, ${name}! We have received your message and will get back to you soon.`);
      // Reset the form after submission
      document.getElementById('contact-form').reset();
    } else {
      alert("Please fill in all fields before submitting.");
    }
  });