// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");
  body.classList.toggle("dark");

  // Change icon
  if (body.classList.contains("light")) {
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
});

// Reveal Sections on Scroll
const sections = document.querySelectorAll(".section, .fade-up, .slide-left");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
