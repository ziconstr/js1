// navbar.js
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const links = document.querySelector("nav ul.links");

  hamburger.addEventListener("click", () => {
    links.classList.toggle("active");
  });
});
