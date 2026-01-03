// Simple animation on scroll (future expansion ready)
document.addEventListener("scroll", () => {
  document.querySelectorAll(".card").forEach((card) => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});
// Simple skill hover message
const skills = document.querySelectorAll(".skill-card");

skills.forEach((skill) => {
  skill.addEventListener("mouseenter", () => {
    console.log(`Exploring skill: ${skill.innerText}`);
  });
});
// About section animation on scroll
const aboutText = document.querySelector(".about-text");

const revealAbout = () => {
  const sectionTop = aboutText.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight - 100) {
    aboutText.classList.add("show");
  }
};

window.addEventListener("scroll", revealAbout);
