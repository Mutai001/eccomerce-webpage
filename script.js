const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
const searchInput = document.querySelector('.search-bar input');
const searchBtn = document.querySelector('.search-bar button');
searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
});

function addToCart(productId) {}

function removeFromCart(productId) {}
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
});
const loginForm = document.querySelector('.account-form.login');
const registerForm = document.querySelector('.account-form.register');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
});