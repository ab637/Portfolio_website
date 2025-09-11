document.addEventListener("DOMContentLoaded", () => {
  // --- Navbar Logic ---
  const hamburger = document.getElementById("hamburger");
  const closeIcon = document.getElementById("closeIcon");
  const navItems = document.getElementById("navItems");

  function handleResize() {
    if (window.innerWidth > 992) {
      navItems.style.display = "block";
      hamburger.style.display = "none";
      closeIcon.style.display = "none";
    } else {
      navItems.style.display = "none";
      hamburger.style.display = "inline-block";
      closeIcon.style.display = "none";
    }
  }

  hamburger.addEventListener("click", () => {
    navItems.style.display = "block";
    hamburger.style.display = "none";
    closeIcon.style.display = "inline-block";
  });

  closeIcon.addEventListener("click", () => {
    navItems.style.display = "none";
    hamburger.style.display = "inline-block";
    closeIcon.style.display = "none";
  });

  // Close mobile nav when a link is clicked
  document.querySelectorAll('#navItems a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 992) {
            navItems.style.display = 'none';
            hamburger.style.display = 'inline-block';
            closeIcon.style.display = 'none';
        }
    });
  });

  window.addEventListener("resize", handleResize);
  handleResize(); // Initial check

  // --- Smooth Scroll on Buttons ---
  document.querySelectorAll('[data-target]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector(btn.dataset.target).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // --- Typed Intro Effect ---
  const titles = ["Engineer", "Analyst", "Consultant"];
  let titleIndex = 0,
    charIndex = 0;
  const typingSpeed = 150;
  const erasingSpeed = 75;
  const delayBetweenWords = 1000;
  const typedTextSpan = document.getElementById("typed-text");

  function type() {
    if (charIndex < titles[titleIndex].length) {
      typedTextSpan.textContent += titles[titleIndex].charAt(charIndex++);
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, delayBetweenWords);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent = titles[titleIndex].substring(0, --charIndex);
      setTimeout(erase, erasingSpeed);
    } else {
      titleIndex = (titleIndex + 1) % titles.length;
      setTimeout(type, typingSpeed + 100);
    }
  }
  type(); // Start the effect

  // --- Scroll Progress Bar Logic ---
  const progressBar = document.getElementById('progress-bar');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPct = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPct + '%';
  });

  // --- Back to Top Button ---
  const toTop = document.getElementById('to-top');
  window.addEventListener('scroll', () => {
    toTop.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  toTop.addEventListener('click', () => window.scrollTo({
    top: 0,
    behavior: 'smooth'
  }));

  // --- Theme Toggle ---
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Function to set theme
  function setTheme(theme) {
    if (theme === 'light') {
      body.classList.add('light-theme');
      toggleBtn.textContent = '🌙';
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.remove('light-theme');
      toggleBtn.textContent = '☀️';
      localStorage.setItem('theme', 'dark');
    }
  }
  
  // Check for saved theme in localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme('dark'); // Default theme
  }
  
  toggleBtn.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  });
});
