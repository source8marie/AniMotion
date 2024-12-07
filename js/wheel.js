// Existing spin-the-wheel logic
const spinButton = document.getElementById("spinButton");
const canvas = document.getElementById("wheel");
const resultDisplay = document.getElementById("result");
const ctx = canvas.getContext("2d");

const sections = ["Naruto", "One Piece", "Attack on Titan", "Demon Slayer", "My Hero Academia", "Dragon Ball"];
const sectionColors = ["#FF5733", "#FFC300", "#DAF7A6", "#33FFBD", "#3398FF", "#FF33A6"];

let startAngle = 0;
const arcSize = (2 * Math.PI) / sections.length;
let spinTimeout;

// Draw the wheel
function drawWheel() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  sections.forEach((section, index) => {
    const angle = startAngle + index * arcSize;
    ctx.beginPath();
    ctx.arc(250, 250, 250, angle, angle + arcSize);
    ctx.lineTo(250, 250);
    ctx.fillStyle = sectionColors[index];
    ctx.fill();

    ctx.save();
    ctx.translate(250, 250);
    ctx.rotate(angle + arcSize / 2);
    ctx.fillStyle = "#000";
    ctx.font = "18px Arial";
    ctx.fillText(section, 150, 10);
    ctx.restore();
  });
}

function spinWheel() {
  const spinAngle = Math.random() * 5000 + 5000;
  let rotation = 0;

  spinTimeout = setInterval(() => {
    rotation += spinAngle / 100;
    startAngle += (rotation * Math.PI) / 180;
    drawWheel();

    if (rotation >= spinAngle) {
      clearInterval(spinTimeout);
      const selectedSection = Math.floor(((startAngle % (2 * Math.PI)) / arcSize) * sections.length);
      resultDisplay.textContent = `You got: ${sections[selectedSection]}`;
    }
  }, 10);
}

// Handle popup logic
const modal = document.getElementById("wheelModal");
const openButton = document.getElementById("openWheelButton");
const closeButton = document.getElementById("closeModal");

openButton.addEventListener("click", () => {
  modal.style.display = "flex";
  drawWheel(); // Initialize the wheel when the modal opens
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});
