# T&T's AniMotion Contact Us Page with Canvas

## 1. Document Type Declaration
```html
<!DOCTYPE html>
Ensures the document is interpreted as HTML5.

```
## 2. HTML Element
```
<html lang="en">
```
Defines the root of the document and sets the language to English.
```
```
## 3. Head Section
```
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>T&T's AniMotion - Contact Us</title>
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
        #myCanvas {
            border: 1px solid black;
            background-color: #f1f1f1;
            display: block;
            margin: 20px auto;
        }
    </style>
</head>
```
Defines the document's metadata, links to external stylesheets, and includes inline styles for the page background.
```
```
## 4. Body Section

Back to Top Button
```
<button type="button" class="btn_up" id="btn_up">
    <i class="fa-solid fa-circle-up"></i>
</button>
```
Adds a button to scroll back to the top of the page.
```
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
        <a href="contact.html" style="color:#ff1ef6">Contact Us <span></span></a>
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
```

<section class="contact">
    <div class="form-container">
        <h2>Contact Us</h2>
        <form action="" method="POST">
            <input type="text" name="name" placeholder="Full Name" required>
            <input type="email" name="email" placeholder="Email" required>
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
</section>
```
This section creates a contact form for users to submit their name, email, and message.
```

<section class="canvas-section">
    <h3>Interactive Canvas</h3>
    <canvas id="myCanvas" width="500" height="500"></canvas>
</section>
A canvas element is added here for rendering graphics or animations.


<section class="footer">
    <div class="credit">
        <p>© 2024 T&T's AniMotion. All rights reserved.</p>
        <div class="icons">
            <a href="https://github.com/source8marie/AniMotions" class="fa-brands fa-github" target="_blank"></a>
        </div>
    </div>
</section>
```
## 5. External JavaScript Files
```
<script src="js/main.js"></script>
<script src="js/series.js"></script>
<script>
    // JavaScript to draw on the canvas
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // Draw a simple rectangle on the canvas
    ctx.fillStyle = "#4CAF50"; // Green color
    ctx.fillRect(50, 50, 150, 100); // x, y, width, height
</script>
