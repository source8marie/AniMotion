# Styling Documentation

This document outlines the CSS used for styling a web application, including its components and responsive design.

## Fonts Import
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Roboto:wght@300&display=swap');
```

## Styling Classes and Selectors 
```css
.main_con2 .description {
    display: flex;
    padding: 2rem;
    background: #181818;
    border-color: #5a0052;
    border-radius: 1rem;
}
```

## Text Styles within .main_con2
```css
.main_con2 p {
    float: right;
    margin-left: 2rem;
    font-size: 1.5rem;
    color: #ffffff;
    line-height: 2.6rem;
    word-wrap: break-word;
    text-transform: none;
}

.description i {
    padding-left: 0.5rem;
    font-size: 3rem;
    font-weight: 900;
    color: #db0d0d;
    user-select: none;
    pointer-events: none;
}
```
---

## Form Styling
#### General Form Styling
```css
form {
    font-family: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif';
    margin-top: 4rem;
    font-size: 1.45rem;
    display: flex;
    width: 100%;
    gap: 1.5rem;
    flex-wrap: wrap;
    line-height: 1.4;
}
```

#### Input Container Styles
```css
form .input_cont #name {
    flex: 1 1 100%;
    width: 100%;
    max-width: 100%;
    height: 4rem;
    max-height: 4rem;
    padding: 1rem;
    overflow: scroll;
    border-width: 0.1rem;
    border-radius: 0.4rem;
    border: 1px solid rgba(255, 255, 255, 0.813);
    transition: 0.2s;
    background: #181818;
    font-size: 1.3rem;
    color: var(--primary_color);
}
```

#### Hover Effects
```css
form #name:hover,
form #email:hover,
form #subject:hover,
form #message:hover {
    border: 0.1rem solid #9d00d1;
}
```
---

## Popup Styling
#### Base Popup
```css
.popup {
    font-family: "Poppins";
    width: 35rem;
    height: 28rem;
    padding: 3rem 2rem;
    background: #fffffff7;
    border-radius: 1rem;
    box-sizing: border-box;
    z-index: 4;
    text-align: center;
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
    opacity: 0;
    top: -200%;
    transform: translate(-100%, -100%) scale(0.5);
    transition: opacity 300ms ease-in-out,
        top 1000ms ease-in-out,
        transform 1000ms ease-in-out;
}
```

#### Active Popup
```css
.popup.active {
    opacity: 1;
    top: 50%;
    transform: translate(-100%, -50%) scale(1);
    transition: transform 300ms cubic-bezier(0.18, 0.89, 0.43, 1.19);
}
```
---

## Media Queries
#### For Width ≤ 1152px
```css
@media (max-width:1152px) {
    form {
        font-size: 1.3rem;
    }
    form .input_cont {
        flex: 0 0 43.5%;
        width: 43.5%;
        max-width: 43.5%;
        display: grid;
        gap: 1rem;
    }
}
```

#### For Width ≤ 990px
```css
@media (max-width:990px) {
    .popup {
        transform: translate(-50%, -50%) scale(0.5);
    }
    .popup.active {
        transform: translate(-50%, -50%) scale(1);
    }
}
```
