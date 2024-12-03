let slideIndex = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Show the first slide initially
showSlides(slideIndex);

function moveSlides(n) {
    slideIndex += n;
    if (slideIndex >= totalSlides) slideIndex = 0;
    if (slideIndex < 0) slideIndex = totalSlides - 1;
    showSlides(slideIndex);
}

function showSlides(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

// Automatically move to the next slide every 5 seconds
setInterval(() => moveSlides(1), 5000);