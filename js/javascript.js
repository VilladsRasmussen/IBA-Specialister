const menuButton = document.querySelector('.menu-knap');
const menu = document.querySelector('#menu');
const overlay = document.querySelector('.overlay');

menuButton.addEventListener('click', function(e) {
    e.preventDefault();
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Add close button functionality
const closeButton = document.querySelector('menu > a > i.fa-x');
closeButton.addEventListener('click', function(e) {
    e.preventDefault();
    menu.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', function() {
    menu.classList.remove('active');
    overlay.classList.remove('active');
});