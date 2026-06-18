// Add your JavaScript code here
// You can add interactivity and functionality to your portfolio website

// Example code: Change the background color of the body
document.body.style.backgroundColor = 'lightgray';

// Example code: Log a message to the console
console.log('Portfolio website loaded.');

// Example code: Send an email when the contact form is submitted
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Send email using a server-side script or an API
  // Replace the code below with your own email sending implementation
  console.log('Sending email...');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Clear the form after submission
  contactForm.reset();
});
