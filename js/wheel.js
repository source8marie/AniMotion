// Spin the Wheel JavaScript
// Fortune Wheel Design with Icons

// Define variables
const openWheelButton = document.getElementById("openWheelButton");
const wheelModal = document.getElementById("wheelModal");
const closeModal = document.getElementById("closeModal");
const spinButton = document.getElementById("spinButton");
const resultDisplay = document.getElementById("result");

const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const centerX = 200;
const centerY = 200;
const radius = 180;

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

// Emojis for each anime
const segmentEmojis = [
  "🍜", // Naruto
  "⚓", // One Piece
  "⚔️", // Attack on Titan
  "💥", // My Hero Academia
  "👹", // Demon Slayer
  "👻", // Jujutsu Kaisen
  "🏍️", // Tokyo Revengers
  "🎯", // Hunter x Hunter
  "📓", // Death Note
];

// Updated colors to match fortune wheel design (alternating purple and blue)
const segmentColors = [
  "#5b4fc7", // Purple
  "#4a90e2", // Blue
  "#5b4fc7", // Purple
  "#4a90e2", // Blue
  "#5b4fc7", // Purple
  "#4a90e2", // Blue
  "#5b4fc7", // Purple
  "#4a90e2", // Blue
  "#5b4fc7", // Purple
];

let startAngle = 0;
let arc = Math.PI * 2 / segments.length;
let spinAngleStart = 0;
let spinTime = 0;
let spinTimeTotal = 0;

// Open modal
openWheelButton.addEventListener("click", () => {
  wheelModal.style.display = "flex";
  drawWheel();
});

// Close modal
closeModal.addEventListener("click", () => {
  wheelModal.style.display = "none";
  resultDisplay.textContent = "";
  clearPreviousResult();
});

// Close on outside click
wheelModal.addEventListener("click", (e) => {
  if (e.target === wheelModal) {
    wheelModal.style.display = "none";
    resultDisplay.textContent = "";
    clearPreviousResult();
  }
});

function drawWheel() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw segments
  for (let i = 0; i < segments.length; i++) {
    const angle = startAngle + i * arc;
    
    // Draw segment
    ctx.fillStyle = segmentColors[i];
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, angle, angle + arc, false);
    ctx.lineTo(centerX, centerY);
    ctx.fill();

    // Add white borders between segments
    ctx.strokeStyle = "white";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(
      centerX + Math.cos(angle) * radius,
      centerY + Math.sin(angle) * radius
    );
    ctx.stroke();

    // Draw emoji icon
    ctx.save();
    const iconX = centerX + Math.cos(angle + arc / 2) * 95;
    const iconY = centerY + Math.sin(angle + arc / 2) * 95;
    
    ctx.font = "35px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(segmentEmojis[i], iconX, iconY);
    ctx.restore();

    // Add text at the outer edge
    ctx.save();
    const textX = centerX + Math.cos(angle + arc / 2) * 140;
    const textY = centerY + Math.sin(angle + arc / 2) * 140;

    ctx.translate(textX, textY);
    const rotateAngle = angle + arc / 2 + Math.PI / 2;
    ctx.rotate(rotateAngle);

    ctx.fillStyle = "white";
    ctx.font = "bold 11px Poppins, Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
    ctx.shadowBlur = 3;

    ctx.fillText(segments[i], 0, 0);
    ctx.restore();
  }

  // Draw center circle with gradient
  ctx.save();
  ctx.beginPath();
  ctx.arc(centerX, centerY, 55, 0, Math.PI * 2, false);
  
  const centerGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 55);
  centerGradient.addColorStop(0, "#e0e7ff");
  centerGradient.addColorStop(1, "#c7d2fe");
  
  ctx.fillStyle = centerGradient;
  ctx.fill();

  ctx.lineWidth = 6;
  ctx.strokeStyle = "#fff";
  ctx.shadowColor = "rgba(0, 0, 0, 0.2)";
  ctx.shadowBlur = 10;
  ctx.stroke();
  ctx.restore();

  // Draw outer border with shadow
  ctx.save();
  ctx.lineWidth = 10;
  ctx.strokeStyle = "#94a3b8";
  ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
  ctx.shadowBlur = 20;
  ctx.beginPath();
  ctx.arc(centerX, centerY, 185, 0, Math.PI * 2, false);
  ctx.stroke();
  ctx.restore();
}

function clearPreviousResult() {
  const resultText = document.querySelector('.anime-result-text');
  if (resultText) {
    resultText.remove();
  }
}

function rotateWheel() {
  clearPreviousResult();

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
  // The arrow points to the top 
  let normalizedAngle = startAngle % (Math.PI * 2);
  if (normalizedAngle < 0) normalizedAngle += Math.PI * 2;
  
  // We need to find which segment is at the top
  const topAngle = (Math.PI * 3/2); 
  
  // Calculate the angle difference from the top
  let angleFromTop = (topAngle - normalizedAngle) % (Math.PI * 2);
  if (angleFromTop < 0) angleFromTop += Math.PI * 2;
  
  // Find which segment this angle falls into
  const index = Math.floor(angleFromTop / arc) % segments.length;
  const anime = segments[index];

  resultDisplay.textContent = `Your Next Anime: ${anime}!`;

  const resultText = document.createElement('div');
  resultText.classList.add('anime-result-text');
  resultText.textContent = anime;

  const wheelContainer = document.querySelector('.wheel-container');
  wheelContainer.appendChild(resultText);

  setTimeout(() => {
    resultText.classList.add('falling-animation');
  }, 100);
}

function easeOut(t, b, c, d) {
  const ts = (t /= d) * t;
  const tc = ts * t;
  return b + c * (tc + -3 * ts + 3 * t);
}

// Spin button click
spinButton.addEventListener("click", () => {
  spinAngleStart = Math.random() * 1000 + 1000; 
  spinTime = 0;
  spinTimeTotal = Math.random() * 500 + 1000; 
  rotateWheel();
});

// Initial draw
drawWheel();