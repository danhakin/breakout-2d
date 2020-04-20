const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

// Draw filled square
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#ff0000";
ctx.fill();
ctx.closePath();

// Draw filled circle
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

// Draw stroke rectangle
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();
