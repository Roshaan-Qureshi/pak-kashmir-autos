// Mobile Responsive Navigation Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu').querySelector('ul');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking any link on mobile
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
});
