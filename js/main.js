const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// GLOW MOUSE EFFECT

const glowCards = document.querySelectorAll(".glow-card");

glowCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  });
});


// MAGNETIC BUTTONS
const buttons = document.querySelectorAll(".magnetic-btn");

buttons.forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0px, 0px)";
  });
});


// PARALLAX SCROLL SUAVE (HERO)
const hero = document.querySelector(".parallax-hero");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  hero.style.transform = `translateY(${scrollY * 0.4}px)`;
});