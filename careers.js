document.addEventListener("DOMContentLoaded", () => {
  // 1) Mobile menu toggle (same functionality as on other pages)
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  menuToggle.addEventListener("click", () => {
    // Toggle mobile menu visibility and button text
    if (mobileMenu.style.display === "block") {
      mobileMenu.style.display = "none";
      menuToggle.textContent = "☰ Menu";
    } else {
      mobileMenu.style.display = "block";
      menuToggle.textContent = "✕ Close";
    }
  });

  // 2) Smooth scroll for any in-page anchor links (if applicable)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        e.preventDefault();
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          window.scrollTo({
            top: targetEl.offsetTop - 60,
            behavior: "smooth"
          });
        }
      }
    });
  });

  // 3) Newsletter subscribe form handler (reused from other pages)
  document.querySelectorAll(".subscribe-form, .subscribe-form-footer").forEach(form => {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Thank you for subscribing!");
      this.reset();
    });
  });

  

  // 4) Scroll-triggered animations using IntersectionObserver
  const observerOptions = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the fade-in-up animation class when section comes into view
        entry.target.classList.add("fade-in-up");
        observer.unobserve(entry.target); // animate only once
      }
    });
  }, observerOptions);

  // Observe sections marked with .animate-on-scroll
  document.querySelectorAll(".animate-on-scroll").forEach(elem => {
    observer.observe(elem);
  });
});