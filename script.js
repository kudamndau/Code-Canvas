let slideIndex = 1;

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Automatic slideshow
function autoSlide() {
  showSlides(slideIndex += 1);
  setTimeout(autoSlide, 3000); // Change slide every 3 seconds
}

// Start the automatic slideshow when the page loads
window.onload = function () {
  autoSlide();
};

document.addEventListener('DOMContentLoaded', function () {
  const openFormButton = document.getElementById('openFormButton');
  const signupFormOverlay = document.getElementById('signupFormOverlay');
  const closeFormButton = document.getElementById('closeFormButton');

  openFormButton.addEventListener('click', function () {
      signupFormOverlay.style.display = 'block';
  });

  closeFormButton.addEventListener('click', function () {
      signupFormOverlay.style.display = 'none';
  });
});

// Open the overlay form
function openFeedbackForm() {
  var overlay = document.getElementById("feedback-overlay");
  overlay.style.display = "flex";
}

// Close the overlay form
function closeFeedbackForm() {
  var overlay = document.getElementById("feedback-overlay");
  overlay.style.display = "none";
}

// Close the overlay form if the user clicks outside of it
window.onclick = function(event) {
  var overlay = document.getElementById("feedback-overlay");
  if (event.target === overlay) {
    overlay.style.display = "none";
  }
};


var backButton = document.getElementById("back-to-top");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backButton.style.display = "block";
  } else {
    backButton.style.display = "none";
  }
};

// Scroll to the top of the document when the button is clicked
backButton.addEventListener("click", function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});
