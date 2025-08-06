document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
    mobileMenu.classList.toggle("open");
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();Z
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        window.scrollTo({
          top: targetEl.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    }
  });
});
const subscribeFormsAbout = document.querySelectorAll('.subscribe-form, .subscribe-form-footer');
subscribeFormsAbout.forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for subscribing!');
    this.reset();
  });
});




