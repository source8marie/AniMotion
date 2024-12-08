# Series Page Styling Documentation

This document outlines the CSS used for styling the Series page, including its layout, typography, and responsive design.

## Overview

The series.css is designed to provide a visually appealing and easy-to-navigate layout for the Series page. It includes styling for the series title, descriptions, images, and pagination controls. The page adapts seamlessly to different screen sizes to ensure a consistent user experience.

## Key Features
- **Grid Layout for Series**: Uses CSS grid to display series items in a structured and responsive layout.
- **Typography and Spacing**: Customizes font sizes and spacing to enhance readability and aesthetics.
- **Pagination Styling**: Controls the appearance of pagination buttons, providing clear navigation options.
- **Responsive Design**: Ensures elements like grid layout and pagination adjust according to various screen sizes with the use of media queries.

## Styles Breakdown

### Font Imports
```css
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Montserrat:wght@500&display=swap');
```

### Series Grid Layout
```css
.series-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
}
```
The grid layout adapts based on available space, ensuring that each series item is evenly distributed with consistent gaps.

### Typography
```css
.series-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 10px;
}
```
Description: The series title uses a bold and modern font with a larger size for prominence.

### Pagination Controls
```css
.pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.pagination button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    margin: 0 5px;
    border: none;
    cursor: pointer;
}

.pagination button:hover {
    background-color: #0056b3;
}
```
Description: Pagination buttons are styled with clear colors and hover effects to improve user interaction.

### Media Queries for Responsive Design
```css
@media (max-width: 768px) {
    .series-grid {
        grid-template-columns: 1fr 1fr;
    }

    .series-title {
        font-size: 1.5rem;
    }
}

@media (max-width: 480px) {
    .series-grid {
        grid-template-columns: 1fr;
    }

    .series-title {
        font-size: 1.2rem;
    }
}
```
Description: Adjusts the grid layout and text sizes for smaller screen sizes to ensure the page remains legible and well-organized.


