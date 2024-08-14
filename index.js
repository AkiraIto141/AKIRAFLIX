const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('#btn-avancar');
const prevButton = document.querySelector('#btn-voltar');
const slideWidth = slides[0].getBoundingClientRect().width;

// Organizando os slides lado a lado
slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
});

let currentSlideIndex = 0;

const moveToSlide = (index) => {
    const amountToMove = -slideWidth * index;
    track.style.transform = `translateX(${amountToMove}px)`;
};

// Avançar slide
nextButton.addEventListener('click', () => {
    if (currentSlideIndex < slides.length - 1) {
        currentSlideIndex++;
        moveToSlide(currentSlideIndex);
    }
});

// Voltar slide
prevButton.addEventListener('click', () => {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        moveToSlide(currentSlideIndex);
    }
});
