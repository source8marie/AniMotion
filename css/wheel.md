# Anime Roulette Wheel Styling Documentation

This CSS file provides the styling for the "Anime Roulette" feature, which is displayed on the homepage. It includes styles for the layout, buttons, wheel container, modal, and various animations, including responsiveness for different screen sizes.

## General Styles

### `.wheel-wrapper`
This class centers the "Anime Roulette" button on the page.
```css
.wheel-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    width: 100%;
}
```

## Button Styles
.wheel-trigger-button
This class styles the main button that triggers the anime roulette.
```css
.wheel-trigger-button {
    background: linear-gradient(90deg, #6a0572, #a4508b);
    color: white;
    padding: 1rem 2.5rem;
    border-radius: 30px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;
    text-align: center;
    font-size: 2rem;
    box-shadow: 0 0 15px rgba(164, 80, 139, 0.6);
    cursor: pointer;
    width: 350px;
}
```

## Hover Effect for Button
```css
.wheel-trigger-button:hover {
    background: linear-gradient(90deg, #a4508b, #ff007f);
    box-shadow: 0 0 25px rgba(255, 0, 127, 0.8);
    transform: scale(1.1);
}
```

## Modal Styles
.wheel-modal
This class styles the modal background that appears when the button is clicked.
```css
.wheel-modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    justify-content: center;
    align-items: center;
}
```

.wheel-close-button
The close button inside the modal.
```css
.wheel-close-button {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 30px;
    cursor: pointer;
    color: #ffffff;
    background: rgba(0, 0, 0, 0.153);
}
```

## Wheel Container
.wheel-container
This class styles the container that holds the wheel.
```css
.wheel-container {
    position: relative;
    margin: 20px auto;
    width: 70vw; /* Increased size for better visibility */
    height: 70vw; /* Increased size for better visibility */
    max-width: 700px; /* Max width for better control */
    max-height: 700px; /* Max height for better control */
}
```

## Canvas Styling
The wheel is drawn inside a canvas element, styled with this:
```css
canvas {
    border: 5px solid #333;
    border-radius: 50%;
    background-color: #fff;
}
```

## Arrow and Result Text
.wheel-arrow
The arrow pointing to the wheel is styled with the following:
```css
.wheel-arrow {
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translate(-50%, -50%) rotate(180deg);
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 40px solid gold;
    filter: drop-shadow(0 0 10px gold) drop-shadow(0 0 15px rgba(255, 215, 0, 0.6));
    transition: filter 0.3s ease-in-out;
}
```

.anime-result-text
This class styles the result text that appears after the wheel is spun.
```css
.anime-result-text {
    position: absolute;
    top: 50%;
    left: 51%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    font-weight: bold;
    color: #9b4dca;
    background: linear-gradient(45deg, #efefef, #c7c7c7);
    padding: 10px 20px;
    border-radius: 30px;
    box-shadow: 0 0 15px rgba(158, 0, 255, 0.8);
    text-align: center;
    font-family: Arial, sans-serif;
    opacity: 0;
    transition: opacity 1s ease-in-out;
}
```
## Animations
Falling Animation
This animation is applied to the result text when the wheel stops.
```css
.falling-animation {
    animation: fall 0.5s ease-in-out forwards;
}

@keyframes fall {
    0% {
        transform: translate(-50%, -100%);
        opacity: 0;
    }

    100% {
        transform: translate(-50%, -50%);
        opacity: 1;
    }
}
```

## Media Queries
This CSS includes responsive design adjustments to ensure the feature looks great on mobile, tablet, and desktop screens.

Mobile Styles (max-width: 767px)
```css
@media screen and (max-width: 767px) {
    .wheel-wrapper {
        flex-direction: column;
        margin: 10px 0;
    }

    .wheel-trigger-button {
        width: 90%;
        font-size: 1.5rem;
        padding: 1rem 2rem;
    }

    .wheel-modal-content {
        width: 90%;
        max-width: 90%;
    }

    .wheel-container {
        width: 80vw;
        height: 80vw;
        max-width: 400px;
        max-height: 400px;
    }

    .anime-result-text {
        font-size: 20px;
        padding: 8px 16px;
    }

    .wheel-spin-button {
        padding: 8px 16px;
        font-size: 14px;
    }
}
```

Tablet Styles (max-width: 1024px)
```css
@media screen and (max-width: 1024px) {
    .wheel-wrapper {
        flex-direction: column;
        margin: 15px 0;
    }

    .wheel-trigger-button {
        width: 70%;
        font-size: 1.8rem;
        padding: 1rem 2.5rem;
    }

    .wheel-modal-content {
        width: 80%;
        max-width: 80%;
    }

    .wheel-container {
        width: 75vw;
        height: 75vw;
        max-width: 600px;
        max-height: 600px;
    }

    .anime-result-text {
        font-size: 22px;
        padding: 10px 18px;
    }

    .wheel-spin-button {
        padding: 9px 18px;
        font-size: 15px;
    }
}
```

Desktop Styles (min-width: 1025px)
```css
@media screen and (min-width: 1025px) {
    .wheel-wrapper {
        margin: 20px auto;
    }

    .wheel-trigger-button {
        width: 350px;
        font-size: 2rem;
        padding: 1rem 2.5rem;
    }

    .wheel-modal-content {
        width: 50%;
        max-width: 600px;
    }

    .wheel-container {
        width: 40vw;
        height: 40vw;
        max-width: 500px;
        max-height: 500px;
    }

    .anime-result-text {
        font-size: 24px;
        padding: 12px 20px;
    }

    .wheel-spin-button {
        padding: 10px 20px;
        font-size: 16px;
    }
}
```
