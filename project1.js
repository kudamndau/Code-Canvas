// JavaScript for Smooth Scrolling
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("#navbar a");

  for (const link of links) {
    link.addEventListener("click", smoothScroll);
  }

  function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").substr(1);
    const targetElement = document.getElementById(targetId);
    const yOffset = -50; // Adjust the offset as needed to align with your header
    const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth"
    });
  }
});




// JavaScript for Contact Form
document.addEventListener("DOMContentLoaded", function() {
  // Select the form element
  const contactForm = document.querySelector("#contact-form");

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Select the input fields
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const commentsInput = document.querySelector("#comments");

    // Select the elements to display success and error messages
    const successMessage = document.querySelector("#success-message");
    const errorMessage = document.querySelector("#error-message");

    // Perform client-side validation
    if (nameInput.value === "" || emailInput.value === "" || commentsInput.value === "") {
      errorMessage.textContent = "Please fill out all fields.";
      successMessage.textContent = "";
    } else {
      // You can add more complex validation here if needed
      // For now, let's assume the form is valid
      errorMessage.textContent = "";
      successMessage.textContent = "Form submitted successfully!";

      // You can send the form data to your server here if needed
      // You might want to use AJAX to send the data
      // Example:
      // fetch("your-server-script.php", {
      //   method: "POST",
      //   body: new FormData(contactForm)
      // })
      // .then(response => response.text())
      // .then(data => {
      //   successMessage.textContent = "Form submitted successfully!";
      // })
      // .catch(error => {
      //   errorMessage.textContent = "Form submission failed. Please try again.";
      // });
    }
  }

  // Add a submit event listener to the form
  contactForm.addEventListener("submit", handleSubmit);
});



// Back to Top button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 20) { // Adjust the scroll position to show the button
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
