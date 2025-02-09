// JavaScript to dynamically add 3 black divs
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('flex-container');

  // Loop to create 3 black divs
  for (let i = 0; i < 12; i++) {
    const div = document.createElement('div'); // Create a new div
    div.classList.add('flex-item'); // Add the flex-item class
    container.appendChild(div); // Append the div to the flex-container
  }
});
