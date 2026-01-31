const moreIcon = document.getElementById('more-icon');
const navText = document.getElementById('nav-text');
const menuOverlay = document.getElementById('menu-overlay');
const navLinks = document.querySelectorAll('#nav-text a');
const quotes = document.querySelectorAll('.quotes');
const heroImg = document.querySelectorAll('.hero-img');

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