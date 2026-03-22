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
if (moreIcon && navText && menuOverlay) {
    const toggleMenu = () => {
        navText.classList.toggle('is-active');
        menuOverlay.classList.toggle('is-active');
        document.body.classList.toggle('no-scroll');
    };

    moreIcon.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navText.classList.remove('is-active');
            menuOverlay.classList.remove('is-active');
            document.body.classList.remove('no-scroll');
        });
    });
}

// quotes
if (quotes.length > 0) {
    let currentQuoteIndex = 0;

    function showNextQuote() {
        quotes[currentQuoteIndex].classList.remove('active');
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        quotes[currentQuoteIndex].classList.add('active');
    }

    setInterval(showNextQuote, 5000);
}

// hero-img
if (heroImg.length > 0) {
    let currentHeroImgIndex = 0;

    function showNextHeroImg() {
        heroImg[currentHeroImgIndex].classList.remove('actives');
        currentHeroImgIndex = (currentHeroImgIndex + 1) % heroImg.length;
        heroImg[currentHeroImgIndex].classList.add('actives');
    }

    setInterval(showNextHeroImg, 8000);
}


// carousel-button
if (carousel && nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
        const card = carousel.querySelector('.university-image-container');
        if (card) {
            const cardWidth = card.offsetWidth;
            const gap = 1; 
            carousel.scrollBy({
                left: cardWidth + gap,
                behavior: 'smooth'
            });
        }
    });

    prevBtn.addEventListener('click', () => {
        const card = carousel.querySelector('.university-image-container');
        if (card) {
            const cardWidth = card.offsetWidth;
            const gap = 1;
            carousel.scrollBy({
                left: -(cardWidth + gap),
                behavior: 'smooth'
            });
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        // Prevent scrolling with arrows if user is focused on the carousel area
        if (e.key === 'ArrowRight') {
            nextBtn.click();
        } else if (e.key === 'ArrowLeft') {
            prevBtn.click();
        }
    });
}

// Nav bar footer
function toggleInstitution() {
    var list = document.getElementById("institution-options");
    var arrow = document.getElementById("institution-arrow");

    if (list && arrow) {
        list.classList.toggle("show");
        arrow.classList.toggle("rotate");
    }
}

// For links options
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.cards-option').forEach(container => {
        const checkbox = container.querySelector('.menu-checkbox');
        
        if (!checkbox) return;

        let closeTimer;

        const startTimer = () => {
            clearTimeout(closeTimer);
            closeTimer = setTimeout(() => {
                checkbox.checked = false;
            }, 3000); 
        };

        container.querySelectorAll('a, .medias').forEach(link => {
            link.addEventListener('click', () => {
                checkbox.checked = false;
                clearTimeout(closeTimer);
            });
        });

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                startTimer();
            } else {
                clearTimeout(closeTimer);
            }
        });

        document.addEventListener('click', (e) => {
            if (!container.contains(e.target) && checkbox.checked) {
                checkbox.checked = false;
                clearTimeout(closeTimer);
            }
        });
    });
});