let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;
}

// Get all slides
var slides = document.querySelectorAll('.slideshow-slide');
var currentSlide = 0;

// Show the first slide
slides[currentSlide].style.display = 'block';

// Function to display the next slide
function nextSlide() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'block';
}

// Automatically switch to the next slide every 3 seconds
setInterval(nextSlide, 5000);