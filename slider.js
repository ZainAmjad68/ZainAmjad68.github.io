const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let slideIndex = 0;

function showSlides(index) {
  const certifications = document.querySelectorAll('.certification');
  if (index >= certifications.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = certifications.length - 1;
  }
  certifications.forEach((certification, i) => {
    certification.style.display = i === slideIndex ? 'block' : 'none';
  });
}

prevBtn.addEventListener('click', () => {
  showSlides(--slideIndex);
});

nextBtn.addEventListener('click', () => {
  showSlides(++slideIndex);
});

showSlides(slideIndex);
