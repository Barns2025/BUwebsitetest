document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
    mobileMenu.classList.toggle("open");
  });
});
// Image click handler to enlarge image (simple lightbox functionality)
const galleryImages = document.querySelectorAll('.gallery-item img');
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    const src = img.getAttribute('src');
    const overlay = document.createElement('div');
    overlay.classList.add('lightbox-overlay');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0,0,0,0.8)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.innerHTML = '<img src="'+src+'" style="max-width:90%; max-height:90%;">';
    document.body.appendChild(overlay);
    overlay.addEventListener('click', () => {
      document.body.removeChild(overlay);
    });
  });
});
// Subscribe form handler
document.querySelectorAll('.subscribe-form, .subscribe-form-footer').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for subscribing!');
    this.reset();
  });
});


