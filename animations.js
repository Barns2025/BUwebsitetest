// animations.js
document.addEventListener("DOMContentLoaded", () => {
  // Options for the observer: fire when 10% of the element is visible
  const observerOptions = {
    threshold: 0.1
  };

  // Create the IntersectionObserver callback
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the CSS animation class
        entry.target.classList.add("fade-in-up");
        // Stop observing once animated
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Find all elements marked for scroll animation
  document.querySelectorAll(".animate-on-scroll").forEach(el => {
    // Optionally, start them hidden via inline style or CSS:
    // el.style.opacity = 0;
    observer.observe(el);
  });
});



/*makes content constanatly fade in and out*/
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const ratio = entry.intersectionRatio;
      // only add once it's at least 20% visible
      if (ratio > 0.2) {
        entry.target.classList.add('in-view');
      }
      // only remove once it's less than 5% visible
      else if (ratio < 0.05) {
        entry.target.classList.remove('in-view');
      }
      // in-between ratios do nothing, avoiding rapid toggles
    });
  }, {
    threshold: [0.05, 0.2]   // watch for both 5% and 20% crossings
  });

  document.querySelectorAll('.stack-item').forEach(el => observer.observe(el));
});





document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  }, {
    // give a 20% “buffer” at the bottom: elements will count as intersecting
    // when they’re up to 20% out of view below the fold
    rootMargin: '0px 0px -20% 0px',
    // fires callback as soon as any bit of the element enters/exits that zone
    threshold: 0
  });

  document.querySelectorAll('.animate-left, .animate-right')
          .forEach(el => observer.observe(el));
});



  // 4) Scroll-triggered animations using IntersectionObserver
  const observerOptions = { threshold: 0.2 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the fade-in-up animation class when section comes into view
        entry.target.classList.add("fade-in-up");
        observer.unobserve(entry.target); // animate only once
      }
    });
  }, observerOptions);
