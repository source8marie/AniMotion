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

            <input type="checkbox" id="toggler">
            <label for="toggler" class="fas fa-bars"></label>

            <nav class="navbar" id="navbar">
                <a href="index.html" class="active">Home <span class="on"></span></a>
                <a href="series.html">Series<span></span></a>
                <a href="movies.html">Movies<span></span></a>
                <a href="contact.html">Contact Us<span></span></a>
            </nav>

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
                <h2>Quick Navigation</h2>
                <button class="sidebar-close" id="sidebar-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <nav class="sidebar-nav">
                <a href="#new-episodes" class="sidebar-link">
                    <i class="fas fa-play-circle"></i>
                    <span>New Episodes</span>
                </a>
                <a href="#most-watched" class="sidebar-link">
                    <i class="fas fa-fire"></i>
                    <span>Most Watched Anime</span>
                </a>
                <a href="#popular-anime" class="sidebar-link">
                    <i class="fas fa-star"></i>
                    <span>Popular Anime</span>
                </a>
                <a href="#popular-genres" class="sidebar-link">
                    <i class="fas fa-th-large"></i>
                    <span>Popular Genres</span>
                </a>
            </nav>
        </aside>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
}

// Call this when page loads
document.addEventListener('DOMContentLoaded', loadNavbar);