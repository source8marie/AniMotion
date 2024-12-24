# Documentation for 'wheel.js' 

## Overview
The `wheel.js` script enables the functionality for an anime roulette picker feature. It includes a graphical wheel with selectable anime titles that users can spin to randomly choose a segment. The functionality includes:

- Modal window for displaying the roulette picker.
- Drawing and styling the roulette wheel.
- Animating the wheel's spin.
- Displaying the selected result.

---

## Key Components

### HTML Elements
- `openWheelButton`: Button to open the wheel modal.
- `wheelModal`: Modal containing the roulette wheel.
- `closeModal`: Button to close the modal.
- `spinButton`: Button to spin the roulette wheel.
- `resultDisplay`: Displays the result of the spin.
- `canvas`: Canvas element for rendering the wheel.

### Data Structures
- **`segments`**: Array of anime titles displayed on the wheel.
  ```javascript
  const segments = [
    "Naruto",
    "One Piece",
    "Attack on Titan",
    "My Hero Academia",
    "Demon Slayer",
    "Jujutsu Kaisen",
    "Tokyo Revengers",
    "Hunter x Hunter",
    "Death Note",
  ];
  ```
- **`segmentColors`**: Array of colors corresponding to the wheel segments.
  ```javascript
  const segmentColors = [
    "#4c0bb2", "#8d35f3", "#cb19f3", "#4c0bb2",
    "#8d35f3", "#cb19f3", "#4c0bb2", "#8d35f3", "#cb19f3"
  ];
  ```

---

## Functions

### Modal Control
- **Open Modal**
  ```javascript
  openWheelButton.addEventListener("click", () => {
    wheelModal.style.display = "flex";
  });
  ```

- **Close Modal**
  ```javascript
  closeModal.addEventListener("click", () => {
    wheelModal.style.display = "none";
    resultDisplay.textContent = "";
  });
  ```

### Drawing the Wheel
- **`drawWheel()`**
  Draws the segments, text, and center design of the wheel.
  ```javascript
  function drawWheel() {
    // Clear the canvas and redraw each segment with text
    for (let i = 0; i < segments.length; i++) {
      // Logic to draw each segment and add text
    }
    // Draw central "Spin" circle and outer border
  }
  ```

### Animation
- **`rotateWheel()`**
  Animates the spinning motion of the wheel based on easing functions.
  ```javascript
  function rotateWheel() {
    spinTime += 30;
    if (spinTime >= spinTimeTotal) {
      stopRotateWheel();
      return;
    }
    const spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
    startAngle += spinAngle * Math.PI / 180;
    drawWheel();
    requestAnimationFrame(rotateWheel);
  }
  ```

- **`easeOut(t, b, c, d)`**
  Calculates the deceleration of the spinning animation.
  ```javascript
  function easeOut(t, b, c, d) {
    const ts = (t /= d) * t;
    const tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
  }
  ```

### Displaying Results
- **`stopRotateWheel()`**
  Stops the animation and displays the result.
  ```javascript
  function stopRotateWheel() {
    const degrees = (startAngle * 180) / Math.PI;
    const index = Math.floor((360 - (degrees % 360)) / arc);
    const anime = segments[index];
    resultDisplay.textContent = `You got: ${anime}`;
  }
  ```

- **`clearPreviousResult()`**
  Removes any previously displayed result text.
  ```javascript
  function clearPreviousResult() {
    const resultText = document.querySelector('.anime-result-text');
    if (resultText) {
      resultText.remove();
    }
  }
  ```

### Event Handlers
- **Spin Button**
  ```javascript
  spinButton.addEventListener("click", () => {
    spinAngleStart = Math.random() * 5000 + 2000;
    spinTime = 0;
    spinTimeTotal = Math.random() * 3000 + 4000;
    rotateWheel();
  });
  ```

---

## Customization
- Modify the `segments` array to include different anime titles.
- Change `segmentColors` to adjust the wheel's color scheme.
- Adjust animation timing by modifying `spinAngleStart`, `spinTime`, and `spinTimeTotal` values.

---

## Styling Notes
- The wheel uses canvas for rendering, allowing for highly customizable designs.
- Shadow and glow effects are applied for visual enhancement.

---

## Dependencies
This script uses only vanilla JavaScript and requires an HTML structure containing the following elements:
- Buttons: `#openWheelButton`, `#closeModal`, `#spinButton`
- Modal container: `#wheelModal`
- Canvas: `#wheel`
- Result display container: `#result`

---

## Example Usage
Include the `wheel.js` script in your HTML and ensure the required elements are present. Customize the segments and styles as desired to create a personalized roulette picker.

---
