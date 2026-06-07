

const fadeElements = document.querySelectorAll('.fade-in');

const revealOnScroll = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('show');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(0,0,0,0.98)';
        header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.4)';
    } else {
        header.style.background = 'rgba(0,0,0,0.95)';
        header.style.boxShadow = 'none';
    }
});

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active-nav');

        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active-nav');
        }
    });
});

const reviewCards = document.querySelectorAll('.review-card');

reviewCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
});

console.log('LLTB Electrical V3 Loaded Successfully');