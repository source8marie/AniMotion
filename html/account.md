# T&T's AniMotion Guest Account Page

## 1. Document Type Declaration
```html
<!DOCTYPE html>
```
Ensures the document is interpreted as HTML5.

---

## 2. HTML Element
```html
<html lang="en">
```
Defines the root of the document and sets the language to English.

---

## 3. Head Section
### Metadata and Styles
```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>T&T's AniMotion - Guest Account</title>
    <link rel="icon" href="img/T&T_Flav.ico">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/series.css">
    <link rel="stylesheet" href="css/form.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap" rel="stylesheet">
    <style>
        body {
            background: url('img/animotionbg.jpg') no-repeat center center fixed;
            background-size: cover;
        }
    </style>
</head>
```
Defines the document's metadata, links to external stylesheets, and includes inline styles for the page background.

---

## 4. Body Section
### Back to Top Button
```html
<button type="button" class="btn_up" id="btn_up">
    <i class="fa-solid fa-circle-up"></i>
</button>
```
Adds a button to scroll back to the top of the page.

### Header
```html
<header class="head">
    <input type="checkbox" id="toggler">
    <label for="toggler" class="fas fa-bars"></label>

    <a href="#" class="logo">
        <img src="img/animotionhdr1.png" alt="T&T's AniMotion Logo">
    </a>

    <nav class="navbar" id="navbar">
        <a href="index.html">Home<span></span></a>
        <a href="series.html">Series<span></span></a>
        <a href="movies.html">Movies<span></span></a>
        <a href="contact.html">Contact Us<span></span></a>
    </nav>

    <div class="header-extras">
        <div class="search-container">
            <input type="text" placeholder="Search..." class="search">
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>

        <div class="account-container">
            <a class="account-btn">
                <i class="bi bi-person-circle"></i>
            </a>
            <div class="account-dropdown">
                <a href="account.html">Account</a>
                <a href="index-login.html">Log Out</a>
            </div>
        </div>
    </div>
</header>
```
Includes the logo, navigation links, search bar, and account menu.

### Account Profile Section
```html
<section class="content2">
    <div class="sub_con2">
        <div class="head2">
            <h1 class="page_title">
                <i class="bi bi-person-circle icon-large"></i> Guest
            </h1>
            <p class="joined-date" style="font-size: 1.2rem; ...">...</p>
            <textarea class="bio-input" placeholder="Type your bio here..."></textarea>

            <div class="stats">
                <div class="stat-item">
                    <p>Total Anime</p>
                    <p>0</p>
                </div>
                <div class="stat-item">
                    <p>Days Watched</p>
                    <p>0.0</p>
                </div>
                <div class="stat-item">
                    <p>Average Score</p>
                    <p>0.00</p>
                </div>
            </div>
        </div>
    </div>
    <div class="popular2">
        <div class="tabs">
            <div class="tab2" id="watching-tab">
                <h3 class="pop2">Watching</h3>
            </div>
            <div class="tab2" id="planning-tab">
                <h3 class="pop2">Planning</h3>
            </div>
            ...
        </div>
    </div>
</section>
```
Displays the user profile, stats, and tabs for anime status categories.

### JavaScript
```html
<script>
    const tabs = document.querySelectorAll('.tab2');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tabs.forEach(t => t.classList.remove('selected'));
            tab.classList.add('selected');
        });
    });
</script>
```
Implements tab selection behavior for the profile section.

### Footer
```html
<section class="footer">
    <div class="credit">...
        <div class="icons">
            <a href="https://github.com/source8marie/AniMotions" class="fa-brands fa-github" target="_blank"></a>
        </div>
    </div>
</section>
```
Displays copyright information and a GitHub link.

---

## 5. External JavaScript Files
```html
<script src="js/main.js"></script>
<script src="js/series.js"></script>
```
Links external JavaScript files for additional functionality.

---

## Summary
This document provides a structured layout for T&T's AniMotion Guest Account page, including navigation, user profile, and interactive features. External resources such as stylesheets and scr
