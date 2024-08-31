document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = link.getAttribute('href');

            // Redirect to the page smoothly
            if (targetPage !== '#') {
                window.location.href = targetPage;
            }
        });
    });
});
