document.addEventListener('DOMContentLoaded', () => {
  // — Mobile menu toggle (new animated version) —
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (menuToggle && mobileMenu) {
    // Ensure ARIA state is correct at start
    menuToggle.setAttribute('aria-expanded', 'false');

    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.classList.toggle('open');
      mobileMenu.classList.toggle('open');

      // Update ARIA and (optionally) visible label
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      // If you still want the “☰ Menu” / “✕ Close” text:
      // menuToggle.textContent = isOpen ? '✕ Close' : '☰ Menu';
    });
  }

  // — Contact form handler —
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you shortly.');
      contactForm.reset();
    });
  }

  // — Newsletter subscribe handlers —
  document.querySelectorAll('.subscribe-form, .subscribe-form-footer')
    .forEach(form => {
      form.addEventListener('submit', e => {
        e.preventDefault();
        alert('Thank you for subscribing!');
        form.reset();
      });
    });
});
