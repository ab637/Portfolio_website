// Smooth scroll on buttons
const buttons = document.querySelectorAll('[data-target]');
buttons.forEach(btn =>
  btn.addEventListener('click', () =>
    document
      .querySelector(btn.dataset.target)
      .scrollIntoView({ behavior: 'smooth' })
  )
);

// Typed Intro Effect
const titles = ["Engineer", "Analyst", "Consultant"];
let titleIndex  = 0,
    charIndex   = 0;

// Speeds (ms)
const typingSpeed    = 300;  // type each char at 100ms
const erasingSpeed   = 50;   // erase each char at 50ms
const cycleDelay     = 0;    // zero pause between cycles

document.addEventListener("DOMContentLoaded", () => {
  type();
});

function type() {
  const el = document.getElementById("typed-text");
  if (charIndex < titles[titleIndex].length) {
    el.textContent += titles[titleIndex].charAt(charIndex++);
    setTimeout(type, typingSpeed);
  } else {
    // start erasing immediately
    setTimeout(erase, cycleDelay);
  }
}

function erase() {
  const el = document.getElementById("typed-text");
  if (charIndex > 0) {
    el.textContent = titles[titleIndex].substring(0, --charIndex);
    setTimeout(erase, erasingSpeed);
  } else {
    // move to next title and start typing at once
    titleIndex = (titleIndex + 1) % titles.length;
    setTimeout(type, cycleDelay);
  }
}
// Scroll Progress Bar Logic
const progressBar = document.getElementById('progress-bar');
window.addEventListener('scroll', () => {
  const scrollTop    = window.scrollY;
  const docHeight    = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPct    = (scrollTop / docHeight) * 100;
  progressBar.style.width = scrollPct + '%';
});
const toTop = document.getElementById('to-top');
window.addEventListener('scroll', () => {
  toTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
toTop.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Default is dark theme unless saved preference says otherwise
  if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-theme');
    toggleBtn.textContent = '🌙';
  } else {
    body.classList.remove('light-theme'); // Ensure dark theme
    toggleBtn.textContent = '☀️';
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-theme');

    if (body.classList.contains('light-theme')) {
      toggleBtn.textContent = '🌙';
      localStorage.setItem('theme', 'light');
    } else {
      toggleBtn.textContent = '☀️';
      localStorage.setItem('theme', 'dark');
    }
  });


