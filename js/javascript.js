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

// Javascript-stykke der filtrerer programmer, ud fra trykket knapper
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.mellem-cta-knap[data-target]');
    const sections = document.querySelectorAll('.programmer-sektion');

    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Hvis knappen allerede er aktiv, så viser vi alle sektioner
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                sections.forEach(section => section.classList.remove('hidden'));
                return;
            }

            // Fjerner klassen active fra alle knapper
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Tilføjer klassen der gør en section synlig
            this.classList.add('active');

            const targetId = this.getAttribute('data-target');

            // Skjuler alle sektioner, undtagen den der er valgt
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.remove('hidden');
                } else {
                    section.classList.add('hidden');
                }
            });
        });
    });
});