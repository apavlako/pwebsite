const title = document.getElementById('title');
const aboutMe = document.getElementById('aboutMe');
const aboutMeContent = document.querySelector('.about-me-content');
const profilePicture = document.querySelector('.profile-picture');
const bio = document.querySelector('.bio');
const slideshow = document.getElementById('slideshow');

const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

const marginTop = 100;
const marginBottom = 100;
const marginLeft = 175;
const marginRight = 175;

let lastScrollY = window.scrollY;

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    let topPosition = 50 - (scrollPosition / 10);
    let leftPosition = 50 - (scrollPosition / 10);

    const initialFontSize = 10;
    const minFontSize = 6;
    let fontSize = Math.max(initialFontSize - (scrollPosition / 100), minFontSize);

    const titleWidth = title.offsetWidth;
    const titleHeight = title.offsetHeight;

    if (topPosition < (marginTop / viewportHeight) * 100) {
        topPosition = (marginTop / viewportHeight) * 100;
    }
    if (topPosition > 100 - (marginBottom / viewportHeight) * 100 - (titleHeight / viewportHeight) * 100) {
        topPosition = 100 - (marginBottom / viewportHeight) * 100 - (titleHeight / viewportHeight) * 100;
    }

    if (leftPosition < (marginLeft / viewportWidth) * 100) {
        leftPosition = (marginLeft / viewportWidth) * 100;
    }
    if (leftPosition > 100 - (marginRight / viewportWidth) * 100 - (titleWidth / viewportWidth) * 100) {
        leftPosition = 100 - (marginRight / viewportWidth) * 100 - (titleWidth / viewportWidth) * 100;
    }

    title.style.top = `${topPosition}%`;
    title.style.left = `${leftPosition}%`;
    title.style.fontSize = `${fontSize}em`;

    if (scrollPosition > 400) {
        aboutMe.style.opacity = 1;
        aboutMe.style.visibility = 'visible';
    } else {
        aboutMe.style.opacity = 0;
        aboutMe.style.visibility = 'hidden';
    }

    if (scrollPosition > 500) {
        slideshow.style.opacity = 1;
        slideshow.style.visibility = 'visible';
    } else {
        slideshow.style.opacity = 0;
        slideshow.style.visibility = 'hidden';
    }

    lastScrollY = scrollPosition;
});

document.addEventListener("DOMContentLoaded", () => {
  const scrollIndicator = document.querySelector('.scroll-indicator');

  window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
          scrollIndicator.style.transition = "opacity 0.5s ease";
          scrollIndicator.style.opacity = "0";

          setTimeout(() => {
              scrollIndicator.style.display = "none";
          }, 500);
      }
  });
});

let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');

function moveSlides(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    updateSlides();
}

function updateSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
}

updateSlides();