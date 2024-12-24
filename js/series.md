# Documentation for `series.js`

This documentation provides a detailed explanation of the functionality implemented in the `series.js` file.

---

## Purpose

This script handles the dynamic display of anime series elements on a webpage. It ensures that only a limited number of series boxes are visible at first, with the option to load more upon user interaction.

---

## Initial Setup

### Key Actions:
1. **Hide Excess Boxes:**
   - All `.box_element` elements beyond the first 10 are hidden initially.
   - Adjusts their `visibility`, `height`, `opacity`, and `transform` properties to ensure they are out of view.
   - Sets margin adjustments for `.img_cont` elements associated with hidden boxes.

### Implementation:
```javascript
for (let i = 10; i < boxes.length; i++) {
  boxes[i].style.visibility = 'hidden';
  boxes[i].style.margin = 'auto';
  boxes[i].style.height = '0';
  boxes[i].style.opacity = '0';
  boxes[i].style.transform = 'translateY(10rem)';
  img_cont1[i].style.marginTop = '0';
}
```

---

## Load More Button Functionality

### Key Actions:
1. **Show Next Two Boxes:**
   - Clicking the `#load_more` button reveals the next two `.box_element` elements.
   - Adjusts `visibility`, `height`, `opacity`, `transform`, and margins to bring them into view.

2. **Disable Button:**
   - Hides the `#load_more` button when all boxes are displayed.

### Implementation:
```javascript
loadBtn.addEventListener('click', () => {
  for (let i = currentIndex + 10; i < currentIndex + 12; i++) {
    boxes[i].style.visibility = 'visible';
    boxes[i].style.height = 'auto';
    boxes[i].style.transition = '0.5s ease-in';
    boxes[i].style.opacity = '1';
    boxes[i].style.transform = 'translateY(0)';
    boxes[i].style.marginTop = '2.5rem';
    img_cont1[i].style.marginTop = '1.5rem';
  }

  currentIndex += 2;

  if (currentIndex >= boxes.length - 10) {
    loadBtn.style.display = 'none';
  }
});
```

---

## Media Query Adjustments

### Key Actions:
1. **Dynamic Display Settings:**
   - Adjusts the display style of `.box_element` elements based on screen width.
   - Ensures `.img_cont` margin settings adapt to smaller screens.

### Implementation:
```javascript
if (window.matchMedia("(max-width: 580px)").matches) {
  boxes.style.display = 'block';
} else {
  boxes.style.display = 'flex';
}

if (window.matchMedia("(max-width: 580px)").matches) {
  img_cont1.style.marginTop = '0';
}
```

### Notes:
- Ensure proper CSS is in place for `.box_element` and `.img_cont` elements.
- Customize styles for better responsiveness and smooth transitions.

---

### General Recommendations:
- Test the functionality across different devices and screen sizes to ensure responsiveness.
- Optimize styles for better performance and user experience.
- Modularize logic for better maintainability if required.
