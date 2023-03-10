const colors = ['red', 'lightblue']; // Array of background colors to cycle through
let currentColorIndex = 0; // Index of the current background color

function Police_Violence() {
  document.body.style.color = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length; // Cycle through the array of colors
}

setInterval(Police_Violence, 1000); // Call the function every 5 seconds
