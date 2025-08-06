document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
    mobileMenu.classList.toggle("open");
  });
});

// Subscribe form
document.querySelectorAll('.subscribe-form, .subscribe-form-footer').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for subscribing!');
    this.reset();
  });
});