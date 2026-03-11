// for navbar

function loadNavbar() {
    const navbarHTML = `
        <header class="head">
            <div class="header-left">
                <input type="checkbox" id="sidebar-toggle">
                <label for="sidebar-toggle" class="sidebar-trigger">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                <a href="index.html" class="logo">
                    <img src="img/animotionhdr1.png" alt="T&T's AniMotion Logo">
                </a>
            </div>

            <div class="header-extras">
                <div class="search-container">
                    <input type="text" placeholder="Search anime..." class="search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>

                <div class="account-container">
                    <a class="account-btn">
                        <i class="bi bi-person-circle"></i>
                    </a>
                    <div class="account-dropdown">
                        <a href="account.html">
                            <i class="bi bi-person-circle"></i>
                            <span>Account</span>
                        </a>
                        <a href="index-login.html">
                            <i class="bi bi-box-arrow-right"></i>
                            <span>Log Out</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>

        <!-- Sidebar -->
        <div class="sidebar-overlay" id="sidebar-overlay"></div>
        <aside class="sidebar" id="sidebar">
            <div class="sidebar-header">
                <h2>Navigation</h2>
                <button class="sidebar-close" id="sidebar-close">
                    <i class="fas fa-chevron-left"></i>
                </button>
            </div>
            <nav class="sidebar-nav">
                <a href="index.html" class="sidebar-link" data-page="index.html">
                    <i class="fas fa-home"></i>
                    <span>Home</span>
                </a>
                <a href="series.html" class="sidebar-link" data-page="series.html">
                    <i class="fas fa-tv"></i>
                    <span>Series</span>
                </a>
                <a href="movies.html" class="sidebar-link" data-page="movies.html">
                    <i class="fas fa-film"></i>
                    <span>Movies</span>
                </a>
                <a href="contact.html" class="sidebar-link" data-page="contact.html">
                    <i class="fas fa-envelope"></i>
                    <span>Contact Us</span>
                </a>
            </nav>
            
            <div class="sidebar-footer">
                <div class="sidebar-divider"></div>
                <a href="account.html" class="sidebar-link">
                    <i class="fas fa-user-circle"></i>
                    <span>Account</span>
                </a>
            </div>
        </aside>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    
    // Set active page after navbar is loaded
    setTimeout(() => {
        setActiveSidebarLink();
    }, 0);
}

// Set active sidebar link based on current page
function setActiveSidebarLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    
    sidebarLinks.forEach(link => {
        const linkPage = link.getAttribute('data-page');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Call this when page loads
document.addEventListener('DOMContentLoaded', loadNavbar);