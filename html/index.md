# T&T AniMotion Home Page

### 1. HTML Document Structure
```html
<!DOCTYPE html>
<html lang="en">
```
- **Purpose:** Defines the document type as HTML5 and sets the language to English.

### 2. Head Section
```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> T&T's AniMotion Home </title>
    <link rel="icon" href="img/T&T_Flav.ico">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/wheel.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap" rel="stylesheet" />
    <style>
        body {
            background: url('img/animotionbg.jpg') no-repeat center center fixed;
            background-size: cover;
        }
    </style>
</head>
```
- **Meta Tags:** Ensure proper encoding, compatibility, and responsive design.
- **Title:** Sets the browser tab title.
- **External Resources:** Links to icons, stylesheets, and fonts.
- **Internal CSS:** Defines the background style for the page.

### 3. Body Section
```html
<body>
    <button type="button" class="btn_up" id="btn_up">
        <i class="fa-solid fa-circle-up"></i>
    </button>
```
- **Button:** Adds a floating button to scroll up.

### 4. Header Section
```html
<header class="head">
    <input type="checkbox" id="toggler">
    <label for="toggler" class="fas fa-bars"></label>

    <a href="#" class="logo">
        <img src="img/animotionhdr1.png" alt="T&T's AniMotion Logo">
    </a>
```
- **Hamburger Menu:** Adds a toggler input for mobile navigation.
- **Logo:** Displays the site's logo.

#### Navbar
```html
<nav class="navbar" id="navbar">
    <a href="index.html" style="color:#ff1ef6">Home <span class="on"></span></a>
    <a href="series.html">Series<span></span></a>
    <a href="movies.html">Movies<span></span></a>
    <a href="contact.html">Contact Us<span></span></a>
</nav>
```
- **Links:** Provides navigation options to various pages.

#### Header Extras
```html
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
```
- **Search Bar:** Allows users to search for content.
- **Account Button:** Provides a dropdown menu for account management.

### 5. Main Screen Slider
```html
<section class="slider">
    <div class="slide_cont">
        <span class="arrow" onclick="goPrev()">
            <svg ...></svg>
        </span>
        <span class="arrow" onclick="goNext()">
            <svg ...></svg>
        </span>
```
- **Arrows:** Allow navigation through slides.

#### Sliding Content
```html
<div class="page">
    <div class="img_box">
        <img src="img/main.gif" alt="">
        <a href="#">Demon Slayer:Kimetsu no Yaiba</a>
    </div>
    ...
</div>
```
- **Image Boxes:** Display anime covers with links.

### 6. Spin the Wheel Section
```html
<div class="wheel-wrapper">
    <button class="wheel-trigger-button" id="openWheelButton">Spin the Wheel to Choose Your Next Anime!</button>
</div>
```
- **Button:** Opens a modal for the "Spin the Wheel" feature.

### 7. Most Watched Anime Section
```html
<section class="content" id="content">
    <div class="sub_content">
        <div class="inner_content">
            <h3 class="heading" style="font-size:3rem"> Most Watched Anime</h3>
        </div>
        <div class="head_content">
            <div class="img">
                <img src="img/aot.gif" alt="Attack on Titan Preview">
            </div>
            <div class="text">
                <a href="#">Shingeki no Kyojin (Attack on Titan)</a>
                <p class="description">...
                </p>
                <span class="read-more" onclick="toggleDescription(this)">Read More</span>
            </div>
        </div>
    </div>
</section>
```
- **Content:** Highlights popular anime with images and descriptions.

#### Additional Anime Cards
```html
<div class="sub_boxes">
    <div class="card_container">
        <div class="sub_img" name="thrill">
            <img src="img/aot2.jpg" alt="">
        </div>
        <a href="#">Shingeki no Kyojin...</a>
    </div>
    ...
</div>
```
- **Cards:** Provide links to additional anime content.

### Summary
This code creates a visually rich website with features like a responsive header, sliders, anime listings, and a "Spin the Wheel" feature to enhance user interaction. Each section is styled with internal and external stylesheets, and navigation is facilitated through a well-structured navbar and interactive elements.
