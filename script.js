// Toggle Menu for Mobile Devices
const navLinks = document.querySelector('.container');
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Menu';
toggleButton.classList.add('menu-toggle');
document.querySelector('.navbar').appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll
const links = document.querySelectorAll('.container a');
for (const link of links) {
    link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const targetElement = document.querySelector(href);
    const offsetTop = targetElement.offsetTop;

    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
}

// Close menu when clicking a link (for mobile)
links.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Handle responsive behavior when resizing the window
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
    }
});