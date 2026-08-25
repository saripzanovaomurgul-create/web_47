document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.getElementById('contactBtn');
    const exploreBtn = document.getElementById('exploreBtn');

    contactBtn.addEventListener('click', () => {
        alert('Для связи с нами напишите на: info@novavibe.com');
    });

    exploreBtn.addEventListener('click', () => {
        const servicesSection = document.getElementById('services');
        servicesSection.scrollIntoView({ behavior: 'smooth' });
    });
});