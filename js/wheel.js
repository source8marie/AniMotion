// Define variables
const openWheelButton = document.getElementById("openWheelButton");
const wheelModal = document.getElementById("wheelModal");
const closeModal = document.getElementById("closeModal");
const spinButton = document.getElementById("spinButton");
const resultDisplay = document.getElementById("result");

const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

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

const segmentColors = [
  "#4c0bb2",
  "#8d35f3",
  "#cb19f3",
  "#4c0bb2",
  "#8d35f3",
  "#cb19f3",
  "#4c0bb2",
  "#8d35f3",
  "#cb19f3",
];

let startAngle = 0;
let arc = Math.PI * 2 / segments.length;  // Evenly divide the circle
let spinAngleStart = 0;
let spinTime = 0;
let spinTimeTotal = 0;

// Open modal
openWheelButton.addEventListener("click", () => {
  wheelModal.style.display = "flex";
});

// Close modal
closeModal.addEventListener("click", () => {
  wheelModal.style.display = "none";
  resultDisplay.textContent = "";
});

function drawWheel() {
  // Clear canvas before drawing the wheel
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw segments
  for (let i = 0; i < segments.length; i++) {
    const angle = startAngle + i * arc;
    ctx.fillStyle = segmentColors[i];
    ctx.beginPath();
    ctx.arc(250, 250, 250, angle, angle + arc, false);
    ctx.lineTo(250, 250);
    ctx.fill();

    // Add horizontally aligned text to each segment
    ctx.save();
    ctx.fillStyle = "white"; // Text color

    // Adjust the position to bring text inward
    const textX = 250 + Math.cos(angle + arc / 2) * 160; // Reduced distance for inward effect
    const textY = 250 + Math.sin(angle + arc / 2) * 160;

    ctx.translate(textX, textY);

    // Rotate text to align with the segment, adjusting to 3 o'clock position (0 radians)
    const rotateAngle = angle + arc / 2 + Math.PI / 2;

    // Align to 3 o'clock position (0 radians)
    const alignedToThreeOClock = rotateAngle - Math.PI / 2;  // Subtract π/2 to align with 3 o'clock

    // Apply the rotation
    ctx.rotate(alignedToThreeOClock);


    // Set smaller font size
    ctx.font = "bold 13px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Add subtle glow effect on the text
    ctx.shadowColor = "rgba(255, 255, 255, 0.6)";
    ctx.shadowBlur = 6;

    ctx.fillText(segments[i], 0, 0); // Draw centered text
    ctx.restore();
  }

  // Draw the "Spin" circle in the center
  ctx.save();
  ctx.beginPath();
  ctx.arc(250, 250, 60, 0, Math.PI * 2, false);  // Circle at the center
  ctx.fillStyle = "#ffd700";  // Gold color
  ctx.shadowColor = "#ffd700";  // Gold glow
  ctx.shadowBlur = 15;  // Glow effect
  ctx.fill();

  // Add a shiny effect to the gold circle
  const gradient = ctx.createRadialGradient(250, 250, 30, 250, 250, 60);
  gradient.addColorStop(0, "rgba(255, 255, 255, 0.4)");  // Light shine at the center
  gradient.addColorStop(1, "#ffd700");  // Gold at the edges
  ctx.fillStyle = gradient;
  ctx.fill();

  // Thicker silver border with shiny effect
  ctx.lineWidth = 10;
  ctx.strokeStyle = "#c0c0c0";  // Silver color
  ctx.stroke();

  // Add subtle shine effect on border
  ctx.lineWidth = 2;
  ctx.strokeStyle = "rgba(255, 255, 0, 0.6)";
  ctx.stroke();

  ctx.restore();

  // Add "Spin" text inside the circle
  ctx.save();
  ctx.fillStyle = "#4c0bb2";  // Updated text color to #4c0bb2
  ctx.font = "bold 20px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Spin", 250, 250);
  ctx.restore();

  // Draw the outer border of the wheel with the shiny effect
  ctx.save();
  ctx.lineWidth = 50;  // Thicker border for the wheel
  ctx.strokeStyle = "#f99eff";  // Outer border color (pink)
  ctx.shadowColor = "#f99eff";  // Pink glow
  ctx.shadowBlur = 30;  // Stronger glow effect
  ctx.beginPath();
  ctx.arc(250, 250, 250, 0, Math.PI * 2, false);  // Outer circle
  ctx.stroke();

  // Add shiny highlights to the outer border
  ctx.lineWidth = 5;
  ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";  // White shiny effect
  ctx.stroke();
  ctx.restore();
}


// Function to clear the previous result
function clearPreviousResult() {
  const resultText = document.querySelector('.anime-result-text');
  if (resultText) {
    resultText.remove(); // Remove the previous result text
  }
}

// Spin the wheel
function rotateWheel() {
  clearPreviousResult(); // Clear the previous result before starting a new spin

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

function stopRotateWheel() {
  const degrees = (startAngle * 180) / Math.PI + 0;  // Adjust to account for the arrow at the top (no +90 here)
  const arcd = (arc * 180) / Math.PI;
  const index = Math.floor((360 - (degrees % 360)) / arcd); // Calculate which segment was selected based on rotation
  const anime = segments[index];  // Get the selected anime

  // Set the result to be inside the wheel (text format)
  const resultDisplay = document.getElementById("result");
  resultDisplay.textContent = `You got: ${anime}`;

  // Create a new div for the anime name with shiny text and a silver background
  const resultText = document.createElement('div');
  resultText.classList.add('anime-result-text');
  resultText.textContent = anime;

  // Add the result text inside the wheel container
  const wheelContainer = document.querySelector('.wheel-container');
  wheelContainer.appendChild(resultText);

  // Apply a falling animation to the result text
  setTimeout(() => {
    resultText.classList.add('falling-animation');
  }, 100);
}

function easeOut(t, b, c, d) {
  const ts = (t /= d) * t;
  const tc = ts * t;
  return b + c * (tc + -3 * ts + 3 * t);
}



// Handle spin button click
spinButton.addEventListener("click", () => {
  spinAngleStart = Math.random() * 5000 + 2000;
  spinTime = 0;
  spinTimeTotal = Math.random() * 3000 + 4000;
  rotateWheel();
});

// Initial draw
drawWheel();
