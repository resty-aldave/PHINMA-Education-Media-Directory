const moreIcon = document.getElementById('more-icon');
const navText = document.getElementById('nav-text');
const menuOverlay = document.getElementById('menu-overlay');
const navLinks = document.querySelectorAll('#nav-text a');

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