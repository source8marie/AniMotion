# Documentation for `main.js`

This documentation provides a detailed explanation of the functionality implemented in the `main.js` file.

---

## Description Toggle

### Purpose:
Toggles the visibility of a description paragraph (`<p>`) when a button is clicked.

### Implementation:
- **Function:** `toggleDescription(button)`
  - Checks if the paragraph has the class `expanded`.
  - Toggles the class `expanded` and updates the button's text between "Read More" and "Read Less."

### Usage:
Attach the function to a button click event to control the visibility of the description.

---

## Slider

### Purpose:
Implements a slider/carousel functionality for a series of pages.

### Key Components:
1. **Setup:**
   - Aligns pages horizontally using `left` property.
2. **Navigation:**
   - `goNext()` and `goPrev()` functions move the slider forward and backward.
3. **Animation:**
   - `slideimage()` translates the current page into view.
4. **Auto-Slide:**
   - A timer is reset using `resetTimer()` to auto-slide every 5 seconds.

### Notes:
- Pages are assumed to have the class `.page`.
- Ensure proper CSS for transitions.

---

## Scroll Header and Back-to-Top Button

### Purpose:
- **Header Visibility:** Hides/shows the header based on scroll direction.
- **Back-to-Top Button:** Shows a button when the user scrolls down and smoothly scrolls back to the top when clicked.

### Implementation:
1. **Header Visibility:**
   - Tracks the scroll position and toggles the `hidden` class on the `.head` element.
2. **Back-to-Top Button:**
   - Shows/hides the button based on scroll position.
   - Animates the scroll back to the top when clicked.

### Notes:
- Ensure `#btn_up` and `.head` are defined in the HTML.
- Customize styles for `.hidden` and button transitions.

---

## Navbar Toggle

### Purpose:
Manages the state of a navbar toggle button and handles interaction events.

### Implementation:
1. **Toggler State:**
   - If the navbar contains the clicked target and the toggler is checked, keep it checked.
   - If the navbar is not clicked, ensure the toggler is unchecked.

### Notes:
- Ensure `#toggler` and `#navbar` are defined in the HTML.
- Add CSS for the toggler and navbar interactions.

---

## Load More Functionality

### Purpose:
Dynamically displays hidden content in batches when a "Load More" button is clicked.

### Implementation:
1. **Initial Setup:**
   - Hides all sub-boxes except the first 5.
2. **Button Action:**
   - Displays the next batch of sub-boxes upon each click.
   - Hides the "Load More" button when all content is displayed.

### Notes:
- Sub-boxes should have the class `.sub_boxes`.
- Ensure `#load_m` is the ID for the "Load More" button.
- Style sub-box transitions for smooth reveal.

---

### General Recommendations:
- Test all functionalities in different browsers to ensure compatibility.
- Use appropriate CSS for a seamless user experience.
- Modularize functions further for maintainability if necessary.
