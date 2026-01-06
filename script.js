document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    // Toggle menu visibility on button click
    menuToggle.addEventListener('click', function () {
        mainNav.classList.toggle('active');
    });

    // Close menu when a link is clicked (for better mobile UX)
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        });
    });
});

