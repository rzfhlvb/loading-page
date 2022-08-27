var container = document.querySelector("h1");
var palette = ["#4ECDC4", "#A9CF54", "#FF6B6B", "#556270"];
var paletteIndex = 0;

setInterval(function () {
  // Reset spans rotation without transitions
  container.className = "no-transition";

  // Debounce change to allow for css changes
  setTimeout(function () {
    container.style.color = palette[paletteIndex];
    container.className = "transition";
    paletteIndex += 1;
    paletteIndex %= palette.length;
  }, 10);
}, 2500);
