const moreIcon = document.getElementById('more-icon');
const navText = document.getElementById('nav-text');
const menuOverlay = document.getElementById('menu-overlay');
const navLinks = document.querySelectorAll('#nav-text a');
const quotes = document.querySelectorAll('.quotes');
const heroImg = document.querySelectorAll('.hero-img');
const carousel = document.getElementById('carousel');
const nextBtn = document.getElementById('next-button');
const prevBtn = document.getElementById('previous-button');


// navbar or menu
const toggleMenu = () => {
    navText.classList.toggle('is-active');
    menuOverlay.classList.toggle('is-active');
};

moreIcon.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', toggleMenu);

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navText.classList.remove('is-active');
        menuOverlay.classList.remove('is-active');
    });
});

// quotes
let currentQuoteIndex = 0;

function showNextQuote() {

    quotes[currentQuoteIndex].classList.remove('active');
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    quotes[currentQuoteIndex].classList.add('active');
}

setInterval(showNextQuote, 5000);

// hero-img
let currentHeroImgIndex = 0;

function showNextHeroImg() {

    heroImg[currentHeroImgIndex].classList.remove('actives');
    currentHeroImgIndex = (currentHeroImgIndex + 1) % heroImg.length;
    heroImg[currentHeroImgIndex].classList.add('actives');
}

setInterval(showNextHeroImg, 8000);


// carousel-button
nextBtn.addEventListener('click', () => {
    const card = carousel.querySelector('.university-image-container');
    const cardWidth = card.offsetWidth;

    const gap = 1; 

    carousel.scrollBy({
        left: cardWidth + gap,
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    const card = carousel.querySelector('.university-image-container');
    const cardWidth = card.offsetWidth;

    const gap = 1;

    carousel.scrollBy({
        left: -(cardWidth + gap),
        behavior: 'smooth'
    });
});
// Nav bar footer
function toggleInstitution() {
        var list = document.getElementById("institution-options");
        var arrow = document.getElementById("institution-arrow");

        list.classList.toggle("show");
        arrow.classList.toggle("rotate");
    }