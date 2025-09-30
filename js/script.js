/* js/script.js */
document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Fade-in animation
    const fadeElements = document.querySelectorAll('.fade-in');
    const checkScroll = () => {
        fadeElements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight * 0.8) {
                el.classList.add('visible');
            }
        });
    };
    window.addEventListener('scroll', checkScroll);
    checkScroll();

    // Form validation
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.querySelector('#name').value.trim();
            const email = document.querySelector('#email').value.trim();
            const message = document.querySelector('#message').value.trim();
            if (name && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && message) {
                alert('Thanks, ' + name + '! I’ll respond soon.');
                contactForm.reset();
            } else {
                alert('Please fill all fields.');
            }
        });
    }
});
