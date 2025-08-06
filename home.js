// home.js
document.addEventListener("DOMContentLoaded", () => {
  // — 1) Animated mobile menu toggle —
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
    mobileMenu.classList.toggle("open");
  });

  // — 2) Smooth scroll for same‐page anchor links —
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId.length > 1) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          window.scrollTo({
            top: targetEl.offsetTop - 60,
            behavior: "smooth"
          });
        }
      }
    });
  });

 // — Scroll-triggered reveal (fade-in-up on every entry) —
  const observerOptions = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up");
      } else {
        entry.target.classList.remove("fade-in-up");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".stack-item").forEach(elem => {
    observer.observe(elem);
  });
});







