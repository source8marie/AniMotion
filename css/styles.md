# Documentation for `style.css`

This file contains the general styling rules and layout configurations for various web pages. Below is a detailed explanation of the structure and functionalities of the styles included in `style.css`.

## Imported Fonts
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Roboto:wght@300&display=swap');
```
- **Poppins**: Used for headers and specific sections.
- **Roboto**: Used for body text and paragraphs.

## Global Variables
The `:root` pseudo-class defines CSS variables for colors, backgrounds, and other design constants:
```css
:root {
    --drk_bdy_color: #424670;
    --orange: #ffff;
    --body_color: #470044;
    --primary_color: #fff;
    --bg_color: #211e46;
    --secondary_color: #e4e4e4;
    --tertiary_color: #fff;
    --border_color: #fff;
    --border_color1: #fff;
    --eee_color: #666;
    --navbg: #470044;
    --icon: #fff;
    --btn_orange: #ded4cf;
    --joined-text-color: #fff;
}
```

## Global Styling
```css
* {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    text-transform: none;
    outline: none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    box-sizing: border-box;
    transition: all 0.2s;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
```
- Removes default margins, paddings, and outlines.
- Enables smooth font rendering.

## Layout and Typography
### HTML
```css
html {
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-behavior: smooth;
    scroll-padding-top: 6rem;
}
```
- Sets base font size to 62.5% for easier `rem` calculations.
- Ensures smooth scrolling with padding adjustment.

### Body
```css
body {
    background: url('img/animotionbg.jpg') no-repeat center center fixed;
    background-size: cover;
    min-height: 100vh;
    width: 100%;
    background-color: var(--bg_color);
}
```
- Adds a fixed background image with fallback color.

## Components
### Header
```css
header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 2rem 9%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
    box-shadow: 0 .5rem 1rem rgba(250, 235, 235, 0.1);
    background: var(--body_color);
    transition: top 0.3s;
}
```
- Fixed navigation bar with responsive padding and shadow effects.

### Navigation Bar
```css
header .navbar {
    display: flex;
    justify-content: flex-start;
    width: 100%;
}

header .navbar a {
    font-family: 'Poppins';
    font-size: 2rem;
    color: var(--secondary_color);
    padding: 0 1.5rem;
    position: relative;
}
```
- Styles links within the navigation bar.
- Utilizes `Poppins` font.

### Buttons
```css
#btn_up {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    border: none;
    outline: none;
    background: none;
    opacity: 0;
}

#btn_up i {
    font-size: 4rem;
    color: var(--icon);
    font-weight: bold;
}

#btn_up i:hover {
    scale: 0.95;
    color: #7e2938;
}
```
- Configures a scroll-to-top button with hover effects.

### Search and Account Dropdown
#### Search Bar
```css
.search {
    width: 16rem;
    height: 3.4rem;
    font-size: 1.3rem;
    border: 0.1rem solid #fff;
    border-radius: 0.8rem;
    background-color: #F0F2F5;
    padding: 1rem;
    outline: none;
}

.search::placeholder {
    color: #4f4f4f;
}
```
- Styled with rounded corners and placeholder text.

#### Account Dropdown
```css
.account-dropdown {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 100;
    width: 150px;
}

.account-container:hover .account-dropdown {
    display: block;
}
```
- Implements hover-triggered dropdown for account options.

## Sliders
```css
.slider .slide_cont {
    width: 100%;
    height: 45rem;
    margin: auto;
    position: relative;
    overflow: hidden;
}

.slider .arrow {
    position: absolute;
    top: 45%;
    background: var(--bg_color);
    width: 2.4rem;
    text-align: center;
    cursor: pointer;
    transition: 0.2s;
}

.slide_cont:hover .arrow {
    display: block;
}
```
- Handles the design and interactions for image sliders.

