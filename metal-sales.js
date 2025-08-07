document.addEventListener("DOMContentLoaded", () => {
  // 1) Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu  = document.querySelector(".mobile-menu");
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("open");
      mobileMenu.classList.toggle("open");
    });
  }

  // 2) Immediately reveal the Metal Sales header on small screens
  if (window.innerWidth < 1100) {
    const headerBlock = document.querySelector(".metal-sales-content .metal-header");
    if (headerBlock) {
      // Trigger the same classes used by your scroll animations
      headerBlock.classList.add("in-view", "fade-in-up");
      headerBlock.querySelectorAll(".stack-item").forEach(el => {
        el.classList.add("in-view", "fade-in-up");
      });
    }
  }

  // 3) Subscribe form submissions
  document.querySelectorAll(".subscribe-form, .subscribe-form-footer").forEach(form => {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Thank you for subscribing!");
      this.reset();
    });
  });
});

