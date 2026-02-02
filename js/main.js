// Scroll to Top Button
const btnUp = document.getElementById("btn_up");

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        btnUp.style.opacity = "1";
        btnUp.style.transform = "translateY(0)";
    } else {
        btnUp.style.opacity = "0";
        btnUp.style.transform = "translateY(100px)";
    }
});

btnUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Header Hide on Scroll
let lastScroll = 0;
const header = document.querySelector('.head');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('hidden');
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
    
    lastScroll = currentScroll;
});

// Banner Slider
let currentBanner = 0;
const bannerSlides = document.querySelectorAll('.banner-slide');

function changeBanner(direction) {
    bannerSlides[currentBanner].classList.remove('active');
    
    currentBanner += direction;
    
    if (currentBanner < 0) {
        currentBanner = bannerSlides.length - 1;
    } else if (currentBanner >= bannerSlides.length) {
        currentBanner = 0;
    }
    
    bannerSlides[currentBanner].classList.add('active');
}

// Auto-advance banner every 5 seconds
setInterval(() => {
    changeBanner(1);
}, 5000);

// Mobile Menu Toggle
const toggler = document.getElementById('toggler');
const navbar = document.getElementById('navbar');

document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !e.target.classList.contains('fa-bars') && toggler.checked) {
        toggler.checked = false;
    }
});

// Sidebar Toggle
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const sidebarClose = document.getElementById('sidebar-close');
const sidebarLinks = document.querySelectorAll('.sidebar-link');

// Open sidebar
document.querySelector('.sidebar-trigger').addEventListener('click', () => {
    sidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close sidebar
sidebarClose.addEventListener('click', () => {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close sidebar when clicking overlay
sidebarOverlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close sidebar when clicking a link
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Load More Functionality
const loadMoreBtn = document.getElementById('load_m');
let itemsToShow = 6;
const allCards = document.querySelectorAll('.anime-card');

if (loadMoreBtn && allCards.length > 0) {
    // Hide cards beyond initial display
    allCards.forEach((card, index) => {
        if (index >= itemsToShow) {
            card.style.display = 'none';
        }
    });

    loadMoreBtn.addEventListener('click', () => {
        const hiddenCards = Array.from(allCards).filter(card => card.style.display === 'none');
        
        hiddenCards.slice(0, 6).forEach(card => {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease';
        });

        if (hiddenCards.length <= 6) {
            loadMoreBtn.style.display = 'none';
        }
    });
}

// Animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Search functionality
const searchInput = document.querySelector('.search');
const searchIcon = document.querySelector('.search-container i');

searchIcon.addEventListener('click', () => {
    searchInput.focus();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});