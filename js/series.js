// Series page JavaScript

// Pagination functionality (placeholder - can be expanded later)
const pageButtons = document.querySelectorAll('.page-btn');

pageButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        pageButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button (except Next button)
        if (!button.textContent.includes('Next')) {
            button.classList.add('active');
        }
        
        // Scroll to top of page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Optional: Add animation when cards come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all series cards
const seriesCards = document.querySelectorAll('.series-card');
seriesCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});