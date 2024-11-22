const menuButton = document.querySelector('.menu-knap'); // Vælger menu-knappen
const menu = document.querySelector('#menu'); // Vælger menuen
const overlay = document.querySelector('.overlay'); // Vælger overlayet på menuen, som skjuler resten af siden

menuButton.addEventListener('click', function(e) {
    e.preventDefault(); // Forhindrer at siden scroller til
    menu.classList.toggle('active'); // Toggler klassen active på menuen, hvilket gør at menuen vises
    overlay.classList.toggle('active'); 
});

// Lukker menu, ved at klikke på krydset (ikonet med classen fa-x)
const closeButton = document.querySelector('#menu .close-menu-button'); // Vælger luk-knappen i menuen
if (closeButton) {
    closeButton.addEventListener('click', function(e) {
        e.preventDefault();
        menu.classList.remove('active'); // Fjerner klassen active fra menuen, hvilket gør at menuen skjules
        overlay.classList.remove('active');
    });
}

overlay.addEventListener('click', function() {
    menu.classList.remove('active');
    overlay.classList.remove('active');
});




// Filter funktion til at vise og skjule sektioner
document.addEventListener('DOMContentLoaded', function() { // Vent til DOM er loaded (resten af siden er loaded, før vi kører koden)
    const filterButtons = document.querySelectorAll('.mellem-cta-knap[data-target]'); // Vælger alle knapper med data-target attributten
    const sections = document.querySelectorAll('.programmer-sektion'); // Vælger alle sektioner, med denne class

    filterButtons.forEach(button => { // Går igennem alle knapperne
        button.addEventListener('click', function(e) { // Lytter efter klik på knappen
            e.preventDefault();
            
            // Hvis knappen allerede er aktiv, så viser vi for den klasse der er valgt
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