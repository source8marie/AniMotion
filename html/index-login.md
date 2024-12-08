# Documentation for Login Page Code
## 1. Document Type Declaration
```
<!DOCTYPE html>
```
Declares the document type as HTML5.

## 2. HTML Element
```
<html lang="en">
```
Defines the root element with the English language.
```
  
## 3. Head Section
```
Meta Tags: Defines character encoding and viewport for responsiveness.

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

Title: Sets the webpage title.
```
<title>Login Page</title>
```
Google Fonts: Imports custom fonts (Orbitron and Poppins).

```
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Poppins:wght@400;600&display=swap" rel="stylesheet">
```
CSS Styles: Resets margins and applies custom styles for layout and design.


## 4. Body Section

Body Styling: Centers content, adds a gradient background and background image.

```
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #1d011d, #2b0032 50%, #400060);
    color: white;
}
```
Container: Centers content with a dark background and glowing box shadow.

```
.container {
    background: rgba(0, 0, 0, 0.8);
    border-radius: 15px;
    padding: 2rem;
    width: 90%;
    max-width: 400px;
    box-shadow: 0 0 30px rgba(106, 5, 114, 0.8);
}
```
Profile Image: Displays a circular image with a glowing effect.

```
.profile-image img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    animation: glow 2s infinite;
}

```
Button Styling: Creates gradient buttons with hover effects.
```
.button {
    background: linear-gradient(90deg, #6a0572, #a4508b);
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 30px;
    text-align: center;
}
.button:hover {
    transform: scale(1.1);
}
```

## 5. Responsive Design

```
@media (max-width: 576px) {
    .profile-image img { width: 120px; height: 120px; }
    .content h1 { font-size: 1.5rem; }
    .button { font-size: 1rem; }
}
```
Adjusts styles for smaller screens (e.g., profile image and text size).

## 6. Body Content
```
<div class="container">
    <div class="profile-image">
        <img src="profile-image.gif" alt="Profile Image">
    </div>
    <div class="content">
        <h1>T&T's AniMotion</h1>
        <div class="buttons">
            <a href="index.html" class="button">Log In as Guest</a>
            <a href="account.html" class="button">Sign Up</a>
            <p>Already have an account? <u> Click here.</u></p>
        </div>
    </div>
</div>
```
Displays the profile image, title, and buttons for logging in or signing up.
