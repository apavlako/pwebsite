document.addEventListener('DOMContentLoaded', function() {
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.split-container');
    const captions = document.querySelectorAll('.caption');
    const leftArrow = document.querySelector('.arrow-left');
    const rightArrow = document.querySelector('.arrow-right');

    // Function to show a specific slide
    function showSlide(index) {
        // Hide all slides first
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });

        // Reset all captions to their initial state
        captions.forEach((caption) => {
            caption.classList.remove('caption-up', 'caption-down');
            caption.style.opacity = '1';
            caption.style.transform = 'translateY(0)';
        });

        // Show the current slide
        slides[index].style.display = 'flex';
    }

    // Show the first slide
    showSlide(currentSlideIndex);

    // Function to go to the next slide (right arrow)
    function nextSlide() {
        const caption = captions[currentSlideIndex];
        caption.classList.add('caption-up'); // Apply the fade-up effect to the caption

        setTimeout(function() {
            currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Cycle to next slide
            showSlide(currentSlideIndex);
        }, 1000); // Wait for the transition to finish
    }

    // Function to go to the previous slide (left arrow)
    function prevSlide() {
        const caption = captions[currentSlideIndex];
        caption.classList.add('caption-down'); // Apply the fade-down effect to the caption

        setTimeout(function() {
            currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length; // Cycle to previous slide
            showSlide(currentSlideIndex);
        }, 1000); // Wait for the transition to finish
    }

    // Add event listeners to the arrows
    leftArrow.addEventListener('click', prevSlide);
    rightArrow.addEventListener('click', nextSlide);
});
