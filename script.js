// Dynamic greeting based on time of day
document.addEventListener("DOMContentLoaded", () => {
  const greeting = document.getElementById("greeting");
  if (greeting) {
    const hour = new Date().getHours();
    let message = "Hello!";
    if (hour < 12) message = "Good morning! 🌅";
    else if (hour < 18) message = "Good afternoon! ☀️";
    else message = "Good evening! 🌙";
    greeting.textContent = message;
  }
});

// Manual Carousel
const images = [
  "https://placekitten.com/303/200",
  "https://placekitten.com/304/200",
  "https://placekitten.com/305/200",
];
let current = 0;

function showNext() {
  current = (current + 1) % images.length;
  document.getElementById("carousel-img").src = images[current];
}

function showPrev() {
  current = (current - 1 + images.length) % images.length;
  document.getElementById("carousel-img").src = images[current];
}
