 // Smooth Scrolling
 document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
    
    // Close the menu after clicking a link
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.remove('active');
  });
});

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  // Change hamburger to "X" when active
  if (navLinks.classList.contains('active')) {
    hamburger.innerHTML = '<span></span><span></span>'; // X icon
  } else {
    hamburger.innerHTML = '<span></span><span></span><span></span>'; // Hamburger icon
  }
});


// FAQ
const questions = document.querySelectorAll('.faq-question');
    questions.forEach(q => {
      q.addEventListener('click', () => {
        q.classList.toggle('active');
        const answer = q.nextElementSibling;
        answer.style.maxHeight = answer.style.maxHeight ? null : answer.scrollHeight + "px";
      });
    });

// Countdown Timer
const countdown = document.getElementById("countdown");
const weddingDate = new Date("2025-06-18T15:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    countdown.innerHTML = "💍 The Wedding is Happening Today! 💐";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);

// Animate on Scroll using IntersectionObserver
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Lightbox script
// Lightbox script
const lightboxes = document.querySelectorAll('.lightbox');

lightboxes.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const imgSrc = link.getAttribute('href');
    const captionText = link.querySelector('img')?.alt || '';

    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `
      <div class="lightbox-content">
        <img src="${imgSrc}" alt="${captionText}">
        ${captionText ? `<p class="lightbox-caption">${captionText}</p>` : ''}
      </div>
    `;

    function removeOverlay() {
      if (document.body.contains(overlay)) {
        document.body.removeChild(overlay);
        document.removeEventListener('keydown', escHandler);
      }
    }

    function escHandler(e) {
      if (e.key === "Escape") {
        removeOverlay();
      }
    }

    overlay.addEventListener('click', removeOverlay);
    document.addEventListener('keydown', escHandler);
    document.body.appendChild(overlay);
  });
});

// Guest list

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById('toggleGuestList');
  const guestList = document.getElementById('guestList');

  toggleButton.addEventListener('click', () => {
    guestList.classList.toggle('show');
    toggleButton.textContent = guestList.classList.contains('show')
      ? 'Hide Guest List'
      : 'Show Guest List';
  });
});

// Music
const music = document.getElementById('background-music');
const toggleButton = document.getElementById('music-toggle');

toggleButton.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        toggleButton.textContent = 'Pause Music';
    } else {
        music.pause();
        toggleButton.textContent = 'Play Music';
    }
});
