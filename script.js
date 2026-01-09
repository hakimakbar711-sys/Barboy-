// Smooth scrolling for sections (if needed for navigation, but since it's one-page, this is optional)
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scroll behavior
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.scrollBehavior = 'smooth';
    });

    // Optional: Add hover effects or scroll animations
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;

        // Parallax effect on shapes (subtle)
        document.querySelectorAll('.shape').forEach(shape => {
            shape.style.transform = `translateY(${rate}px)`;
        });
    });
});
