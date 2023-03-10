var colors = ["lightblue", "red"]; // Array of colors to cycle through
var currentIndex = 0; // Index of the current color

function changeBackgroundColor() {
  var body = document.querySelector("body");
  body.style.backgroundColor = colors[currentIndex]; // Set the background color to the current color
  currentIndex = (currentIndex + 1) % colors.length; // Move to the next color, wrapping around to the beginning if necessary
}

setInterval(changeBackgroundColor, 2000); // Call the function every 5 seconds (5000 milliseconds)
