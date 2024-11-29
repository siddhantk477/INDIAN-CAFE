// Function to show a message when the "Learn More" button is clicked
function showMessage() {
    alert("Thank you for your interest! We are always happy to serve you with the best food!");
  }
  
  // Contact form submission handler
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    if (name && email) {
      alert(`Thank you, ${name}! We will get in touch with you at ${email} soon.`);
    } else {
      alert("Please fill in both your name and email.");
    }
  });